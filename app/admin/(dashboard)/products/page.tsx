import Link from "next/link"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { DeleteProductButton } from "@/components/admin/delete-product-button"

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { updatedAt: "desc" },
    include: {
      images: { orderBy: { sortOrder: "asc" }, take: 1 },
    },
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold">
            Productos
          </h1>
          <p className="mt-1 text-sm text-muted-foreground font-[var(--font-inter)]">
            Editá precios, imágenes y datos. La tienda pública se actualiza al guardar.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/products/new">Nuevo producto</Link>
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-left text-sm font-[var(--font-inter)]">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 font-medium">Nombre</th>
              <th className="px-4 py-3 font-medium">Precio</th>
              <th className="hidden px-4 py-3 font-medium md:table-cell">Género</th>
              <th className="hidden px-4 py-3 font-medium lg:table-cell">Categoría</th>
              <th className="px-4 py-3 font-medium text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-border">
                <td className="px-4 py-3">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.slug}</div>
                </td>
                <td className="px-4 py-3 tabular-nums">{p.price}</td>
                <td className="hidden px-4 py-3 capitalize md:table-cell">{p.gender}</td>
                <td className="hidden px-4 py-3 capitalize lg:table-cell">{p.category}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/products/${p.id}/edit`}>Editar</Link>
                    </Button>
                    <DeleteProductButton id={p.id} name={p.name} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length === 0 && (
          <p className="px-4 py-12 text-center text-muted-foreground">
            No hay productos. Cargá el seed con{" "}
            <code className="rounded bg-muted px-1">pnpm db:seed</code> o creá uno nuevo.
          </p>
        )}
      </div>
    </div>
  )
}
