import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { products, getProductBySlug, PRODUCT_CATEGORIES } from "@/lib/products"
import { getProductPurchaseUrl } from "@/lib/whatsapp"
import { SITE_NAME } from "@/lib/site-config"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Producto | " + SITE_NAME }
  return {
    title: `${product.name} | Tienda ${SITE_NAME}`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  }
}

function categoryLabel(slug: string) {
  return PRODUCT_CATEGORIES.find((c) => c.id === slug)?.name ?? slug
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const gallery = product.images?.length
    ? [product.image, ...product.images]
    : [product.image]
  const uniqueGallery = [...new Set(gallery)]
  const waUrl = getProductPurchaseUrl(product)
  const body = product.longDescription ?? product.description

  return (
    <main className="min-h-screen">
      <Header />
      <article className="pt-24 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="mb-8 font-[var(--font-inter)] text-sm text-muted-foreground flex flex-wrap gap-x-4 gap-y-2">
            <Link
              href="/tienda"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Tienda
            </Link>
            <span className="text-border" aria-hidden>
              /
            </span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-card shadow-sm">
                <Image
                  src={uniqueGallery[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {uniqueGallery.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {uniqueGallery.slice(1, 5).map((src, i) => (
                    <div
                      key={`${src}-${i}`}
                      className="relative aspect-square rounded-lg overflow-hidden bg-muted"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-primary font-[var(--font-inter)] mb-2">
                  {categoryLabel(product.category)}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
                <p className="text-3xl font-bold text-primary mt-4">{product.price}</p>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground font-[var(--font-inter)] leading-relaxed">
                  {body}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BA5C] text-white w-full sm:w-auto"
                >
                  <a href={waUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Comprar por WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/tienda">Seguir viendo la tienda</Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground font-[var(--font-inter)]">
                Al pulsar &quot;Comprar por WhatsApp&quot; se abre el chat con el mensaje del
                producto ya escrito; solo confirma talla, color o envío con el equipo.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
