import type { Metadata } from "next"
import Link from "next/link"
import { IconChevronLeft } from "@/components/icons"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCatalog } from "@/components/product-catalog"
import { TiendaHub } from "@/components/tienda-hub"
import { getProducts } from "@/lib/products"
import { SITE_NAME } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Tienda | ${SITE_NAME}`,
  description:
    "Catálogo por mujer y hombre: billeteras, cinturones, bolsos y accesorios. Compra por WhatsApp.",
}

export const dynamic = "force-dynamic"

export default async function TiendaPage() {
  const products = await getProducts()
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="mb-8 font-[var(--font-inter)] text-sm text-muted-foreground">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <IconChevronLeft className="w-4 h-4" size={16} />
              Volver al inicio
            </Link>
          </nav>

          <div className="mb-14 space-y-5 text-center md:mb-16">
            <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-primary/90 font-[var(--font-inter)]">
              Marketplace
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-[2rem] font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Tienda Shekiná
            </h1>
            <p className="mx-auto max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground font-[var(--font-inter)] md:max-w-2xl md:text-base">
              Elegí tu colección o explorá el catálogo completo. Cada pieza está organizada
              por género y categoría.
            </p>
          </div>

          <TiendaHub />

          <div className="mt-20 pt-16 border-t border-border">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">Catálogo completo</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-[var(--font-inter)] text-sm">
                Vista general con todos los productos y filtros por tipo. Las piezas unisex
                aparecen en Mujer y en Hombre.
              </p>
            </div>
            <ProductCatalog products={products} showGenderOnCards />
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
