"use server"

import { revalidatePath } from "next/cache"
import { z } from "zod"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { slugify } from "@/lib/slug"

const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  slug: z.string().min(1).optional(),
  gender: z.enum(["mujer", "hombre", "unisex"]),
  category: z.enum(["billeteras", "cinturones", "bolsos", "accesorios"]),
  price: z.string().min(1),
  description: z.string().min(1),
  longDescription: z.string().optional(),
  imageUrls: z.array(z.string().min(4)).min(1),
})

async function requireAdmin() {
  const session = await auth()
  if (!session?.user?.id || session.user.role !== "ADMIN") {
    throw new Error("No autorizado")
  }
}

export async function saveProduct(input: z.infer<typeof productSchema>) {
  await requireAdmin()
  const data = productSchema.parse(input)
  const slug = data.slug?.trim() || slugify(data.name)

  const urls = data.imageUrls.filter(Boolean)
  const imageCreates = urls.map((url, i) => ({
    url: url.startsWith("http") || url.startsWith("/") ? url : `/${url}`,
    sortOrder: i,
  }))

  let finalSlug = slug

  if (data.id) {
    const clash = await prisma.product.findFirst({
      where: { slug, NOT: { id: data.id } },
    })
    if (clash) {
      throw new Error("Ese slug ya está en uso por otro producto.")
    }
    await prisma.product.update({
      where: { id: data.id },
      data: {
        slug,
        name: data.name,
        gender: data.gender,
        category: data.category,
        price: data.price,
        description: data.description,
        longDescription: data.longDescription || null,
        images: {
          deleteMany: {},
          create: imageCreates,
        },
      },
    })
    finalSlug = slug
  } else {
    const existing = await prisma.product.findUnique({ where: { slug } })
    finalSlug = existing ? `${slug}-${Date.now().toString(36)}` : slug
    await prisma.product.create({
      data: {
        slug: finalSlug,
        name: data.name,
        gender: data.gender,
        category: data.category,
        price: data.price,
        description: data.description,
        longDescription: data.longDescription || null,
        images: { create: imageCreates },
      },
    })
  }

  revalidatePath("/tienda")
  revalidatePath("/tienda/mujer")
  revalidatePath("/tienda/hombre")
  revalidatePath(`/tienda/${finalSlug}`)
  revalidatePath("/")
  return { ok: true as const }
}

export async function deleteProduct(id: string) {
  await requireAdmin()
  const row = await prisma.product.findUnique({ where: { id }, select: { slug: true } })
  await prisma.product.delete({ where: { id } })
  if (row?.slug) revalidatePath(`/tienda/${row.slug}`)
  revalidatePath("/tienda")
  revalidatePath("/tienda/mujer")
  revalidatePath("/tienda/hombre")
  revalidatePath("/")
  return { ok: true as const }
}
