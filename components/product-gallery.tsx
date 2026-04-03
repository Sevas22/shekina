import { ProductCatalog } from "@/components/product-catalog"
import { products } from "@/lib/products"

export function ProductGallery() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase font-[var(--font-inter)]">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Nuestros Productos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-[var(--font-inter)]">
            Descubre nuestra colección de artículos de cuero, elaborados con dedicación y los
            mejores materiales.
          </p>
        </div>

        <ProductCatalog products={products} showStoreLink />
      </div>
    </section>
  )
}
