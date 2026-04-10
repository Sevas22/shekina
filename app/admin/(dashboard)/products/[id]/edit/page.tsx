import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { mapPrismaProductToProduct } from "@/lib/product-mapper"
import { ProductForm } from "@/components/admin/product-form"

type Props = { params: Promise<{ id: string }> }

export default async function EditProductPage({ params }: Props) {
  const { id } = await params
  const row = await prisma.product.findUnique({
    where: { id },
    include: { images: true },
  })
  if (!row) notFound()

  const product = mapPrismaProductToProduct(row)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold">
          Editar producto
        </h1>
        <p className="mt-2 text-muted-foreground font-[var(--font-inter)]">
          {product.name}
        </p>
      </div>
      <ProductForm product={product} />
    </div>
  )
}
