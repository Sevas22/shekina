import Link from "next/link"
import Image from "next/image"
import { IconArrowUpRight } from "@/components/icons"
import {
  PRODUCT_CATEGORIES,
  type ProductCategoryId,
} from "@/lib/products-types"
import { cn } from "@/lib/utils"

const categoryIds = PRODUCT_CATEGORIES.filter(
  (c): c is { id: ProductCategoryId; name: string } => c.id !== "all"
)

const COLLECTION_IMAGES = {
  mujer:
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1600&q=90&auto=format&fit=crop",
  hombre:
    "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=1600&q=90&auto=format&fit=crop",
} as const

function CollectionCard({
  href,
  title,
  subtitle,
  imageSrc,
  imagePriority,
}: {
  href: string
  title: string
  subtitle: string
  imageSrc: string
  imagePriority?: boolean
}) {
  return (
    <Link
      href={href}
      aria-label={`Colección ${title}: ${subtitle}`}
      className={cn(
        "group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl md:min-h-[360px]",
        "shadow-[0_20px_50px_-12px_rgba(62,42,28,0.18)] ring-1 ring-stone-900/[0.06]",
        "transition-all duration-500 ease-out",
        "hover:shadow-[0_28px_60px_-12px_rgba(62,42,28,0.22)] hover:-translate-y-1 hover:ring-primary/20"
      )}
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        priority={imagePriority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
      />
      {/* Contraste inferior: texto legible sin “lavar” toda la foto */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[oklch(0.26_0.035_52)]/92 via-[oklch(0.26_0.035_52)]/35 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] to-transparent opacity-90"
        aria-hidden
      />

      <div className="relative z-10 p-8 md:p-10 lg:p-11">
        <span
          className="inline-block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[oklch(0.88_0.04_78)] font-[var(--font-inter)]"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.25)" }}
        >
          Colección
        </span>
        <h2
          className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-[oklch(0.985_0.01_85)] md:text-[2.15rem] md:leading-tight"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.35)" }}
        >
          {title}
        </h2>
        <p
          className="mt-3 max-w-[20rem] text-sm leading-relaxed text-[oklch(0.94_0.02_85)]/95 font-[var(--font-inter)] md:text-[0.9375rem]"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
        >
          {subtitle}
        </p>
        <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[oklch(0.92_0.04_78)] font-[var(--font-inter)] transition-all duration-300 group-hover:gap-3">
          Ver productos
          <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={16} />
        </span>
      </div>
    </Link>
  )
}

function QuickColumn({
  genderLabel,
  basePath,
  prefix,
}: {
  genderLabel: string
  basePath: "/tienda/mujer" | "/tienda/hombre"
  prefix: string
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm backdrop-blur-sm",
        "md:p-8 md:shadow-[0_4px_24px_-8px_rgba(62,42,28,0.12)]"
      )}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          {genderLabel}
        </span>
        <span
          className="h-px flex-1 bg-gradient-to-r from-[var(--brand-gold)]/80 to-transparent"
          aria-hidden
        />
      </div>
      <ul className="flex flex-wrap gap-2.5">
        {categoryIds.map((cat) => (
          <li key={`${prefix}-${cat.id}`}>
            <Link
              href={`${basePath}?categoria=${cat.id}`}
              className={cn(
                "inline-flex items-center rounded-full border border-primary/12 bg-background/80 px-4 py-2.5",
                "text-sm font-medium text-foreground/90 font-[var(--font-inter)]",
                "shadow-[0_1px_2px_rgba(62,42,28,0.06)]",
                "transition-all duration-300 ease-out",
                "hover:border-primary/35 hover:bg-primary hover:text-primary-foreground hover:shadow-md",
                "hover:-translate-y-0.5 active:translate-y-0",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2"
              )}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TiendaHub() {
  return (
    <div className="space-y-16 md:space-y-20">
      <div className="grid gap-5 md:grid-cols-2 md:gap-7 lg:gap-8">
        <CollectionCard
          href="/tienda/mujer"
          title="Mujer"
          subtitle="Billeteras, bolsos y accesorios seleccionados para vos."
          imageSrc={COLLECTION_IMAGES.mujer}
          imagePriority
        />
        <CollectionCard
          href="/tienda/hombre"
          title="Hombre"
          subtitle="Cinturones, morrales y piezas de trabajo y viaje."
          imageSrc={COLLECTION_IMAGES.hombre}
        />
      </div>

      <div className="relative">
        <div className="absolute -top-6 left-1/2 h-px w-[min(100%,320px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent md:-top-8" />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-foreground md:text-2xl">
            Explorá por categoría
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-[var(--font-inter)] md:text-[0.9375rem]">
            Accesos directos a cada tipo de pieza dentro de tu colección.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:mt-12">
          <QuickColumn genderLabel="Mujer" basePath="/tienda/mujer" prefix="m" />
          <QuickColumn genderLabel="Hombre" basePath="/tienda/hombre" prefix="h" />
        </div>
      </div>
    </div>
  )
}
