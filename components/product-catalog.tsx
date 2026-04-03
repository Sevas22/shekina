"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import {
  PRODUCT_CATEGORIES,
  type Product,
  type ProductCategoryId,
} from "@/lib/products"

type ProductCatalogProps = {
  products: Product[]
  /** En inicio: enlace destacado a la tienda completa */
  showStoreLink?: boolean
}

export function ProductCatalog({ products, showStoreLink }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | ProductCategoryId>("all")

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products
    return products.filter((p) => p.category === activeCategory)
  }, [products, activeCategory])

  return (
    <>
      {showStoreLink && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 text-center sm:text-left">
          <p className="text-muted-foreground font-[var(--font-inter)] text-sm max-w-xl">
            Catálogo completo con fichas por producto. Compra coordinada por WhatsApp.
          </p>
          <Button asChild variant="outline" className="border-primary text-primary shrink-0">
            <Link href="/tienda">
              Ver tienda completa
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {PRODUCT_CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all font-[var(--font-inter)] ${
              activeCategory === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground hover:bg-primary/10"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground font-[var(--font-inter)] py-12">
          No hay productos en esta categoría por ahora.
        </p>
      )}
    </>
  )
}
