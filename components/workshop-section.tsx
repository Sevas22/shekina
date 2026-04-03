import Image from "next/image"

export function WorkshopSection() {
  return (
    <section className="py-20 bg-sidebar text-sidebar-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <span className="inline-block text-sm font-medium text-sidebar-primary tracking-wider uppercase font-[var(--font-inter)]">
              Nuestro Taller
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Donde la tradición se encuentra con la excelencia
            </h2>
            <p className="text-sidebar-foreground/70 leading-relaxed font-[var(--font-inter)]">
              En nuestro taller combinamos técnicas artesanales heredadas de generación en generación 
              con herramientas y maquinaria de precisión. Cada pieza que sale de nuestras manos 
              lleva consigo el sello de calidad y dedicación que nos caracteriza.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-sidebar-primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-sidebar-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-[var(--font-inter)]">Máquinas de coser industriales especializadas en cuero</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-sidebar-primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-sidebar-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-[var(--font-inter)]">Hilos y materiales importados de alta calidad</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-sidebar-primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-sidebar-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-[var(--font-inter)]">Técnicas tradicionales de marroquinería</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DBjEoZEZaFG8x0VOS073EQ3XxuYAVi.png"
                alt="Taller de Shekiná con máquinas de coser"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-sidebar-primary/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-sidebar-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
