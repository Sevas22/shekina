import Link from "next/link"
import Image from "next/image"
import { IconMessage } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { GENDER_LABELS, type Product } from "@/lib/products"
import { getProductPurchaseUrl } from "@/lib/whatsapp"

export function ProductCard({
  product,
  showGenderBadge = false,
}: {
  product: Product
  showGenderBadge?: boolean
}) {
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
        {showGenderBadge && (
          <span className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-foreground border border-border font-[var(--font-inter)]">
            {GENDER_LABELS[product.gender]}
          </span>
        )}
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
              <IconMessage className="w-4 h-4 mr-1" size={16} />
              Comprar
            </a>
          </Button>
        </div>
      </div>
    </article>
  )
}
