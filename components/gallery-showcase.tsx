"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"

const galleryItems = [
  {
    src: `${BLOB}/image-5UXXzH9aYFkUOFQAsSEcZvl3TrH9IV.png`,
    alt: "Fachada del local Shekiná",
    caption: "Nuestra fachada",
    layout: "tall",
  },
  {
    src: `${BLOB}/image-gyFYwTQ8QcuSHYV72RyWmWGzINA2VF.png`,
    alt: "Artículos de cuero en exhibición",
    caption: "Exhibición y terminados",
    layout: "square",
  },
  {
    src: `${BLOB}/image-DBjEoZEZaFG8x0VOS073EQ3XxuYAVi.png`,
    alt: "Taller con máquinas de coser",
    caption: "El taller en acción",
    layout: "wide",
  },
  {
    src: `${BLOB}/image-gyFYwTQ8QcuSHYV72RyWmWGzINA2VF.png`,
    alt: "Detalle de productos de cuero",
    caption: "Texturas y acabados",
    layout: "square",
  },
  {
    src: `${BLOB}/image-5UXXzH9aYFkUOFQAsSEcZvl3TrH9IV.png`,
    alt: "Entrada al negocio",
    caption: "Bienvenida",
    layout: "wide",
  },
  {
    src: `${BLOB}/image-DBjEoZEZaFG8x0VOS073EQ3XxuYAVi.png`,
    alt: "Zona de trabajo artesanal",
    caption: "Oficio y precisión",
    layout: "tall",
  },
] as const

type GalleryItem = (typeof galleryItems)[number]

export function GalleryShowcase() {
  const [active, setActive] = useState<GalleryItem | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <>
      {/* Hero — estilo rótulo de fachada: bloque oscuro + línea dorada */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-sidebar"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
          }}
        />
        <div className="absolute top-24 right-0 w-[min(55vw,28rem)] h-[min(55vw,28rem)] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-[var(--font-inter)] text-sm font-medium tracking-[0.35em] uppercase mb-4">
              Shekiná
            </p>
            <h1 className="text-4xl md:text-6xl text-sidebar-foreground leading-[1.05] mb-6">
              Galería
            </h1>
            <div className="h-1 w-24 bg-brand-gold rounded-full mb-6" aria-hidden />
            <p className="text-sidebar-foreground/75 font-[var(--font-inter)] text-lg leading-relaxed">
              Un vistazo al local, al taller y a la artesanía detrás de cada pieza.
              Toca una imagen para ampliarla.
            </p>
          </div>
        </div>
      </section>

      {/* Mosaico asimétrico + marcos dorados al hover */}
      <section className="relative pb-24 md:pb-32 -mt-8 md:-mt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(180px,auto)]">
            {galleryItems.map((item, i) => {
              const gridClass =
                item.layout === "tall"
                  ? "md:col-span-5 md:row-span-2 min-h-[280px] md:min-h-[420px]"
                  : item.layout === "wide"
                    ? "md:col-span-7 min-h-[220px] md:min-h-[260px]"
                    : "md:col-span-4 min-h-[200px] md:min-h-[240px]"

              const rotate = i % 3 === 1 ? "md:-rotate-[0.5deg]" : i % 3 === 2 ? "md:rotate-[0.5deg]" : ""

              return (
                <button
                  key={`${item.caption}-${i}`}
                  type="button"
                  onClick={() => setActive(item)}
                  className={`group relative text-left rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background ${gridClass} ${rotate}`}
                >
                  <span className="absolute inset-0 z-10 pointer-events-none rounded-xl border border-transparent group-hover:border-brand-gold/90 transition-colors duration-300 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]" />
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sidebar/85 via-sidebar/20 to-transparent z-[5]" />
                  <div className="absolute bottom-0 left-0 right-0 z-[6] p-4 md:p-5">
                    <p className="text-white font-[var(--font-inter)] text-sm font-medium tracking-wide">
                      {item.caption}
                    </p>
                    <p className="text-brand-gold-muted/90 font-[var(--font-inter)] text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Clic para ampliar
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          <p className="mt-10 text-center text-muted-foreground font-[var(--font-inter)] text-sm max-w-xl mx-auto">
            Las fotos se pueden sustituir cuando tengas más material del taller o del aviso de fachada.
          </p>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(open) => !open && close()}>
        <DialogContent
          showCloseButton
          className="max-w-[min(96vw,56rem)] p-0 gap-0 overflow-hidden border-brand-gold/30 bg-sidebar sm:max-w-[min(96vw,56rem)]"
        >
          <DialogTitle className="sr-only">
            {active ? active.caption : "Imagen ampliada"}
          </DialogTitle>
          {active && (
            <div className="relative w-full aspect-[4/3] md:aspect-video bg-sidebar">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="96vw"
                priority
              />
            </div>
          )}
          {active && (
            <div className="px-5 py-4 border-t border-brand-gold/20">
              <p className="text-sidebar-foreground font-[var(--font-inter)] text-sm">
                {active.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
