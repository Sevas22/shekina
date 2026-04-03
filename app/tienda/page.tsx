import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCatalog } from "@/components/product-catalog"
import { products } from "@/lib/products"
import { SITE_NAME } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Tienda | ${SITE_NAME}`,
  description:
    "Catálogo de artículos de cuero: billeteras, cinturones, bolsos y accesorios. Consulta disponibilidad y compra por WhatsApp.",
}

export default function TiendaPage() {
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
              <ChevronLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </nav>

          <div className="text-center space-y-4 mb-12">
            <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase font-[var(--font-inter)]">
              Marketplace
            </span>
            <h1 className="text-3xl md:text-4xl font-bold">Tienda Shekiná</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-[var(--font-inter)]">
              Todos nuestros productos en un solo lugar. Entra en cada artículo para ver el
              detalle y, cuando quieras comprar, te llevamos a WhatsApp para coordinar pago y
              envío.
            </p>
          </div>

          <ProductCatalog products={products} />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
