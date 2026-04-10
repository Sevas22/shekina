"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { IconChevronDown, IconMenu, IconClose } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getWhatsAppUrl } from "@/lib/whatsapp"

const navigation = [
  { name: "Galería", href: "/galeria" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
]

const whatsappCotizarUrl = getWhatsAppUrl(
  "¡Hola! Me gustaría cotizar un producto o servicio."
)

const linkBase =
  "font-[var(--font-inter)] text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  const navMuted = isHome
    ? "text-white/85 hover:text-[oklch(0.86_0.1_78)] after:bg-[oklch(0.78_0.11_78)]"
    : "text-foreground/80 hover:text-primary after:bg-primary"

  const navActive = isHome
    ? "text-white after:w-full after:bg-[oklch(0.78_0.11_78)]"
    : "text-foreground after:w-full after:bg-primary"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300",
        isHome
          ? "border-white/10 bg-gradient-to-b from-black/55 via-black/20 to-transparent backdrop-blur-[2px]"
          : "border-border bg-background/95 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h2iFaLZ0rHHH7blgDbdfkragETquYr.png"
            alt="Shekiná - Reparación de Calzado"
            width={160}
            height={50}
            className={cn("h-12 w-auto", isHome && "brightness-0 invert")}
            priority
          />
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          <Link href="/" className={cn(linkBase, pathname === "/" ? navActive : navMuted)}>
            Inicio
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex items-center gap-1 outline-none border-none bg-transparent cursor-pointer",
                linkBase,
                pathname.startsWith("/tienda") ? navActive : navMuted
              )}
            >
              Tienda
              <IconChevronDown className="w-4 h-4 opacity-70" size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[14rem]">
              <DropdownMenuItem asChild>
                <Link href="/tienda">Resumen y catálogo completo</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tienda/mujer">Colección mujer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tienda/hombre">Colección hombre</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                linkBase,
                pathname === item.href ? navActive : navMuted
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button
            asChild
            className={cn(
              "text-primary-foreground shadow-sm",
              isHome
                ? "bg-[oklch(0.74_0.11_78)] text-stone-950 hover:bg-[oklch(0.78_0.1_78)]"
                : "bg-primary hover:bg-primary/90"
            )}
          >
            <Link href={whatsappCotizarUrl} target="_blank" rel="noopener noreferrer">
              Cotizar por WhatsApp
            </Link>
          </Button>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menú principal</span>
            {mobileMenuOpen ? (
              <IconClose className="h-6 w-6" size={24} />
            ) : (
              <IconMenu className="h-6 w-6" size={24} />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-6 pt-2 bg-background border-b border-border">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <div className="pt-2 pb-1">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tienda
              </p>
              <Link
                href="/tienda"
                className="block rounded-lg px-3 py-2 pl-5 text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resumen y catálogo
              </Link>
              <Link
                href="/tienda/mujer"
                className="block rounded-lg px-3 py-2 pl-5 text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Colección mujer
              </Link>
              <Link
                href="/tienda/hombre"
                className="block rounded-lg px-3 py-2 pl-5 text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Colección hombre
              </Link>
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href={whatsappCotizarUrl} target="_blank" rel="noopener noreferrer">
                Cotizar por WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
