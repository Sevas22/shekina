import type { Product as PrismaProduct, ProductImage } from "@prisma/client"
import type { Product, ProductCategoryId, ProductGenderId } from "@/lib/products-types"

export type PrismaProductWithImages = PrismaProduct & { images: ProductImage[] }

export function mapPrismaProductToProduct(row: PrismaProductWithImages): Product {
  const ordered = [...row.images].sort((a, b) => a.sortOrder - b.sortOrder)
  const urls = ordered.map((i) => i.url)
  const main = urls[0] ?? ""
  const rest = urls.length > 1 ? urls.slice(1) : undefined

  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    gender: row.gender.toLowerCase() as ProductGenderId,
    category: row.category.toLowerCase() as ProductCategoryId,
    price: row.price,
    image: main,
    images: rest,
    description: row.description,
    longDescription: row.longDescription ?? undefined,
  }
}
