import Link from "next/link"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"

export default async function AdminHomePage() {
  const count = await prisma.product.count()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold">
          Bienvenida
        </h1>
        <p className="mt-2 text-muted-foreground font-[var(--font-inter)]">
          Gestioná el catálogo del marketplace. Los cambios se reflejan al instante en la tienda
          pública.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground font-[var(--font-inter)]">
            Productos publicados
          </p>
          <p className="mt-2 text-3xl font-bold tabular-nums">{count}</p>
        </div>
        <div className="flex flex-col justify-center gap-3 rounded-xl border border-dashed border-border p-6">
          <Button asChild>
            <Link href="/admin/products">Ir a productos</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/products/new">Cargar nuevo producto</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
