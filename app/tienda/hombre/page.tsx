import type { Metadata } from "next"
import Link from "next/link"
import { IconChevronLeft } from "@/components/icons"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCatalog } from "@/components/product-catalog"
import {
  getProductsByAudience,
  parseCategoryParam,
} from "@/lib/products"
import { SITE_NAME } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Hombre | Tienda ${SITE_NAME}`,
  description:
    "Colección hombre: cinturones, morrales, billeteras y más. Consulta por WhatsApp.",
}

type Props = { searchParams: Promise<{ categoria?: string }> }

export const dynamic = "force-dynamic"

export default async function TiendaHombrePage({ searchParams }: Props) {
  const sp = await searchParams
  const initialCategory = parseCategoryParam(sp.categoria)
  const products = await getProductsByAudience("hombre")

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="mb-8 font-[var(--font-inter)] text-sm text-muted-foreground flex flex-wrap gap-x-2 gap-y-1 items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <IconChevronLeft className="w-4 h-4" size={16} />
              Inicio
            </Link>
            <span className="text-border" aria-hidden>
              /
            </span>
            <Link href="/tienda" className="hover:text-primary transition-colors">
              Tienda
            </Link>
            <span className="text-border" aria-hidden>
              /
            </span>
            <span className="text-foreground">Hombre</span>
          </nav>

          <div className="text-center space-y-4 mb-12">
            <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase font-[var(--font-inter)]">
              Colección
            </span>
            <h1 className="text-3xl md:text-4xl font-bold">Hombre</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-[var(--font-inter)]">
              Líneas sobrias y resistentes para el día a día. Filtrá por categoría y
              coordiná tu pedido por WhatsApp.
            </p>
          </div>

          <ProductCatalog
            products={products}
            initialCategory={initialCategory}
            showGenderOnCards
          />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
