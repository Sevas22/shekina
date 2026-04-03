import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.74_0.12_78/0.08),transparent_50%),radial-gradient(circle_at_80%_60%,oklch(0.44_0.095_52/0.06),transparent_45%)]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase font-[var(--font-inter)]">
                Artesanía en Cuero
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Tradición y calidad en cada{" "}
                <span className="text-primary">puntada</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-[var(--font-inter)]">
              Expertos en reparación de calzado y confección de artículos de cuero. 
              Billeteras, cinturones, bolsos y más, elaborados con la más alta calidad artesanal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                <Link href="/servicios">
                  Ver Servicios
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/contacto">
                  Contáctanos
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground font-[var(--font-inter)]">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5000+</p>
                <p className="text-sm text-muted-foreground font-[var(--font-inter)]">Clientes satisfechos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground font-[var(--font-inter)]">Cuero genuino</p>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5UXXzH9aYFkUOFQAsSEcZvl3TrH9IV.png"
                    alt="Fachada de Shekiná"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gyFYwTQ8QcuSHYV72RyWmWGzINA2VF.png"
                    alt="Productos de cuero - billeteras y cinturones"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DBjEoZEZaFG8x0VOS073EQ3XxuYAVi.png"
                    alt="Taller de costura y reparación"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
