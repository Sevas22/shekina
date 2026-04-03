export type ProductCategoryId =
  | "billeteras"
  | "cinturones"
  | "bolsos"
  | "accesorios"

export type Product = {
  id: string
  slug: string
  name: string
  category: ProductCategoryId
  price: string
  image: string
  /** Imágenes extra para la ficha (si no hay, se usa solo `image`) */
  images?: string[]
  description: string
  longDescription?: string
}

export const PRODUCT_CATEGORIES: { id: "all" | ProductCategoryId; name: string }[] =
  [
    { id: "all", name: "Todos" },
    { id: "billeteras", name: "Billeteras" },
    { id: "cinturones", name: "Cinturones" },
    { id: "bolsos", name: "Bolsos" },
    { id: "accesorios", name: "Accesorios" },
  ]

export const products: Product[] = [
  {
    id: "1",
    slug: "billetera-clasica",
    name: "Billetera Clásica",
    category: "billeteras",
    price: "$85.000",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop",
    description: "Billetera de cuero genuino con múltiples compartimentos",
    longDescription:
      "Billetera de cuero genuino con compartimentos para billetes, monedas y tarjetas. Acabado artesanal ideal para el día a día.",
  },
  {
    id: "2",
    slug: "cinturon-artesanal",
    name: "Cinturón Artesanal",
    category: "cinturones",
    price: "$65.000",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&h=800&fit=crop",
    description: "Cinturón tallado a mano con hebilla de bronce",
    longDescription:
      "Cinturón de cuero con hebilla de bronce. Tallado y acabado a mano en nuestro taller.",
  },
  {
    id: "3",
    slug: "bolso-de-mano",
    name: "Bolso de Mano",
    category: "bolsos",
    price: "$180.000",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop",
    description: "Bolso elegante de cuero italiano",
    longDescription:
      "Bolso de mano con silueta elegante y herrajes resistentes. Perfecto para trabajo o salidas.",
  },
  {
    id: "4",
    slug: "tarjetero-compacto",
    name: "Tarjetero Compacto",
    category: "accesorios",
    price: "$45.000",
    image:
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=800&h=800&fit=crop",
    description: "Tarjetero minimalista con protección RFID",
    longDescription:
      "Tarjetero slim para llevar lo esencial. Opción con interior para protección RFID.",
  },
  {
    id: "5",
    slug: "billetera-ejecutiva",
    name: "Billetera Ejecutiva",
    category: "billeteras",
    price: "$120.000",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&h=800&fit=crop",
    description: "Diseño ejecutivo con acabados premium",
    longDescription:
      "Líneas sobrias y cuero seleccionado. Pensada para quien busca durabilidad y estilo.",
  },
  {
    id: "6",
    slug: "cinturon-doble-faz",
    name: "Cinturón Doble Faz",
    category: "cinturones",
    price: "$95.000",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop",
    description: "Cinturón reversible negro y marrón",
    longDescription:
      "Dos colores en una sola pieza. Ideal para combinar con distintos outfits.",
  },
  {
    id: "7",
    slug: "morral-de-viaje",
    name: "Morral de Viaje",
    category: "bolsos",
    price: "$280.000",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop",
    description: "Morral espacioso para viajes y trabajo",
    longDescription:
      "Amplio compartimento principal y bolsillos organizadores. Correas reforzadas para uso diario.",
  },
  {
    id: "8",
    slug: "llavero-premium",
    name: "Llavero Premium",
    category: "accesorios",
    price: "$25.000",
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=800&fit=crop",
    description: "Llavero de cuero con grabado personalizado",
    longDescription:
      "Detalle de cuero con posibilidad de grabado. Consulta en WhatsApp por personalización.",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(
  categoryId: "all" | ProductCategoryId
): Product[] {
  if (categoryId === "all") return products
  return products.filter((p) => p.category === categoryId)
}
