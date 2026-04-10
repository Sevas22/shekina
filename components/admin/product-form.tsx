"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { saveProduct } from "@/lib/actions/admin-products"
import type { Product } from "@/lib/products-types"
import { slugify } from "@/lib/slug"

const schema = z
  .object({
    id: z.string().optional(),
    name: z.string().min(1, "Nombre requerido"),
    slug: z.string().optional(),
    gender: z.enum(["mujer", "hombre", "unisex"]),
    category: z.enum(["billeteras", "cinturones", "bolsos", "accesorios"]),
    price: z.string().min(1, "Precio requerido"),
    description: z.string().min(1, "Descripción corta requerida"),
    longDescription: z.string().optional(),
    imageUrls: z.array(z.string()),
  })
  .refine(
    (data) => data.imageUrls.some((u) => u.trim().length > 4),
    { message: "Al menos una imagen (URL válida o archivo subido)", path: ["imageUrls"] }
  )

type FormValues = z.infer<typeof schema>

function productToDefaults(p: Product): FormValues {
  const urls = [p.image, ...(p.images ?? [])].filter(Boolean)
  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    gender: p.gender,
    category: p.category,
    price: p.price,
    description: p.description,
    longDescription: p.longDescription ?? "",
    imageUrls: urls.length ? urls : [""],
  }
}

export function ProductForm({ product }: { product?: Product }) {
  const router = useRouter()
  const [uploading, setUploading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: product
      ? productToDefaults(product)
      : {
          name: "",
          slug: "",
          gender: "unisex",
          category: "accesorios",
          price: "",
          description: "",
          longDescription: "",
          imageUrls: [""],
        },
  })

  const imageUrls = form.watch("imageUrls")

  async function onUploadFile(file: File) {
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append("file", file)
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: fd,
      })
      if (!res.ok) throw new Error("Error al subir")
      const data = (await res.json()) as { url: string }
      const current = form.getValues("imageUrls").filter((u) => u.trim() !== "")
      form.setValue("imageUrls", [...current, data.url])
      toast.success("Imagen subida")
    } catch {
      toast.error("No se pudo subir la imagen")
    } finally {
      setUploading(false)
    }
  }

  async function onSubmit(values: FormValues) {
    try {
      await saveProduct({
        id: values.id,
        name: values.name,
        slug: values.slug?.trim() || slugify(values.name),
        gender: values.gender,
        category: values.category,
        price: values.price.trim(),
        description: values.description.trim(),
        longDescription: values.longDescription?.trim() || undefined,
        imageUrls: values.imageUrls.map((u) => u.trim()).filter(Boolean),
      })
      toast.success("Producto guardado")
      router.push("/admin/products")
      router.refresh()
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error al guardar")
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="max-w-2xl space-y-6 font-[var(--font-inter)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" {...form.register("name")} />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="slug">Slug (URL)</Label>
          <Input
            id="slug"
            placeholder="auto desde el nombre"
            {...form.register("slug")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Precio (texto)</Label>
          <Input id="price" placeholder="$85.000" {...form.register("price")} />
        </div>
        <div className="space-y-2">
          <Label>Género</Label>
          <Select
            value={form.watch("gender")}
            onValueChange={(v) =>
              form.setValue("gender", v as FormValues["gender"])
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mujer">Mujer</SelectItem>
              <SelectItem value="hombre">Hombre</SelectItem>
              <SelectItem value="unisex">Unisex</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Categoría</Label>
          <Select
            value={form.watch("category")}
            onValueChange={(v) =>
              form.setValue("category", v as FormValues["category"])
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="billeteras">Billeteras</SelectItem>
              <SelectItem value="cinturones">Cinturones</SelectItem>
              <SelectItem value="bolsos">Bolsos</SelectItem>
              <SelectItem value="accesorios">Accesorios</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="description">Descripción corta</Label>
          <Textarea id="description" rows={2} {...form.register("description")} />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="longDescription">Descripción larga (opcional)</Label>
          <Textarea
            id="longDescription"
            rows={5}
            {...form.register("longDescription")}
          />
        </div>
      </div>

      <div className="space-y-3">
        <Label>Imágenes (primera = principal)</Label>
        <p className="text-xs text-muted-foreground">
          Pegá URLs o subí archivos desde tu equipo. En producción recomendamos Vercel Blob
          (variable BLOB_READ_WRITE_TOKEN).
        </p>
        <div className="space-y-2">
          {imageUrls.map((_, i) => (
            <div key={i} className="flex gap-2">
              <Input
                {...form.register(`imageUrls.${i}` as const)}
                placeholder="https://… o /uploads/…"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const next = imageUrls.filter((__, j) => j !== i)
                  form.setValue("imageUrls", next.length ? next : [""])
                }}
              >
                Quitar
              </Button>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={() => form.setValue("imageUrls", [...imageUrls, ""])}
          >
            + URL
          </Button>
          <label className="inline-flex cursor-pointer">
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              className="sr-only"
              disabled={uploading}
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) void onUploadFile(f)
                e.target.value = ""
              }}
            />
            <span className="inline-flex h-9 items-center rounded-md border border-input bg-background px-4 text-sm font-medium hover:bg-accent">
              {uploading ? "Subiendo…" : "Subir archivo"}
            </span>
          </label>
        </div>
        {form.formState.errors.imageUrls && (
          <p className="text-sm text-destructive">Revisá las imágenes</p>
        )}
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="submit">Guardar producto</Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancelar
        </Button>
      </div>
    </form>
  )
}
