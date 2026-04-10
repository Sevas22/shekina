import { prisma } from "@/lib/prisma"
import { mapPrismaProductToProduct } from "@/lib/product-mapper"
import { seedProducts } from "@/lib/seed-products"
import type {
  Product,
  ProductCategoryId,
  ProductGenderId,
} from "@/lib/products-types"

export type {
  Product,
  ProductCategoryId,
  ProductGenderId,
} from "@/lib/products-types"

export {
  GENDER_LABELS,
  PRODUCT_CATEGORIES,
  parseCategoryParam,
} from "@/lib/products-types"

/** Catálogo público desde la base de datos. Si la BD está vacía o falla, usa datos de respaldo (solo lectura). */
export async function getProducts(): Promise<Product[]> {
  try {
    const rows = await prisma.product.findMany({
      include: { images: true },
      orderBy: { createdAt: "asc" },
    })
    if (rows.length === 0) return seedProducts
    return rows.map(mapPrismaProductToProduct)
  } catch {
    return seedProducts
  }
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  try {
    const row = await prisma.product.findUnique({
      where: { slug },
      include: { images: true },
    })
    if (!row) {
      return seedProducts.find((p) => p.slug === slug)
    }
    return mapPrismaProductToProduct(row)
  } catch {
    return seedProducts.find((p) => p.slug === slug)
  }
}

export async function getProductsByAudience(
  audience: "mujer" | "hombre"
): Promise<Product[]> {
  const all = await getProducts()
  return all.filter(
    (p) => p.gender === audience || p.gender === "unisex"
  )
}

export async function getProductsByCategory(
  categoryId: "all" | ProductCategoryId
): Promise<Product[]> {
  const all = await getProducts()
  if (categoryId === "all") return all
  return all.filter((p) => p.category === categoryId)
}

export async function getProductsByAudienceAndCategory(
  audience: "mujer" | "hombre",
  categoryId: "all" | ProductCategoryId
): Promise<Product[]> {
  const base = await getProductsByAudience(audience)
  if (categoryId === "all") return base
  return base.filter((p) => p.category === categoryId)
}

/** Slugs para rutas estáticas (build). */
export async function getAllProductSlugs(): Promise<string[]> {
  try {
    const rows = await prisma.product.findMany({ select: { slug: true } })
    if (rows.length === 0) return seedProducts.map((p) => p.slug)
    return rows.map((r) => r.slug)
  } catch {
    return seedProducts.map((p) => p.slug)
  }
}
