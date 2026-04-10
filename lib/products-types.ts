export type ProductGenderId = "mujer" | "hombre" | "unisex"

export type ProductCategoryId =
  | "billeteras"
  | "cinturones"
  | "bolsos"
  | "accesorios"

export type Product = {
  id: string
  slug: string
  name: string
  gender: ProductGenderId
  category: ProductCategoryId
  price: string
  image: string
  images?: string[]
  description: string
  longDescription?: string
}

export const GENDER_LABELS: Record<ProductGenderId, string> = {
  mujer: "Mujer",
  hombre: "Hombre",
  unisex: "Unisex",
}

export const PRODUCT_CATEGORIES: { id: "all" | ProductCategoryId; name: string }[] =
  [
    { id: "all", name: "Todos" },
    { id: "billeteras", name: "Billeteras" },
    { id: "cinturones", name: "Cinturones" },
    { id: "bolsos", name: "Bolsos" },
    { id: "accesorios", name: "Accesorios" },
  ]

export function parseCategoryParam(
  value: string | undefined
): "all" | ProductCategoryId {
  if (!value || value === "all") return "all"
  const allowed: ProductCategoryId[] = [
    "billeteras",
    "cinturones",
    "bolsos",
    "accesorios",
  ]
  return allowed.includes(value as ProductCategoryId)
    ? (value as ProductCategoryId)
    : "all"
}
