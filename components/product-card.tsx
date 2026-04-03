import Link from "next/link"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"
import { getProductPurchaseUrl } from "@/lib/whatsapp"

export function ProductCard({ product }: { product: Product }) {
  const waUrl = getProductPurchaseUrl(product)

  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      <Link href={`/tienda/${product.slug}`} className="block relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
      </Link>
      <div className="p-5 space-y-3 flex flex-col flex-1">
        <Link href={`/tienda/${product.slug}`} className="space-y-1 flex-1">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground font-[var(--font-inter)] line-clamp-2">
            {product.description}
          </p>
        </Link>
        <div className="flex items-center justify-between gap-2 pt-2 flex-wrap">
          <span className="text-xl font-bold text-primary">{product.price}</span>
          <Button
            size="sm"
            asChild
            className="bg-[#25D366] hover:bg-[#20BA5C] text-white shrink-0"
          >
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-1" aria-hidden />
              Comprar
            </a>
          </Button>
        </div>
      </div>
    </article>
  )
}
