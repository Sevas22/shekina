import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { IconHeart, IconUsers, IconAward, IconTarget } from "@/components/icons"

export const metadata = {
  title: "Nosotros | Shekiná - Reparación de Calzado",
  description: "Conoce nuestra historia, valores y el equipo detrás de Shekiná. Más de 20 años de tradición artesanal.",
}

const values = [
  {
    icon: IconHeart,
    title: "Pasión por el Oficio",
    description: "Cada pieza que elaboramos refleja nuestro amor por la artesanía y el trabajo bien hecho.",
  },
  {
    icon: IconUsers,
    title: "Servicio Personalizado",
    description: "Tratamos a cada cliente como único, escuchando sus necesidades y superando sus expectativas.",
  },
  {
    icon: IconAward,
    title: "Calidad Sin Compromiso",
    description: "Utilizamos solo los mejores materiales y técnicas para garantizar durabilidad y belleza.",
  },
  {
    icon: IconTarget,
    title: "Atención al Detalle",
    description: "Nos obsesionamos con cada puntada, cada acabado, cada mínimo detalle de nuestro trabajo.",
  },
]

const timeline = [
  {
    year: "2003",
    title: "El Comienzo",
    description: "Iniciamos como un pequeño taller de reparación de calzado con la visión de ofrecer servicio de calidad.",
  },
  {
    year: "2008",
    title: "Expansión de Servicios",
    description: "Comenzamos a confeccionar artículos de cuero, respondiendo a las solicitudes de nuestros clientes.",
  },
  {
    year: "2015",
    title: "Nuevo Local",
    description: "Nos mudamos a nuestro local actual, más amplio y mejor equipado para servir a nuestra creciente clientela.",
  },
  {
    year: "2024",
    title: "Innovación Continua",
    description: "Incorporamos nuevas técnicas y maquinaria, manteniendo siempre la esencia artesanal que nos define.",
  },
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase font-[var(--font-inter)]">
                Nuestra Historia
              </span>
              <h1 className="text-4xl md:text-5xl font-bold">
                Tradición artesanal con <span className="text-primary">corazón familiar</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-[var(--font-inter)]">
                Shekiná nació del amor por el oficio de la marroquinería. Somos un taller familiar 
                que ha dedicado más de dos décadas a perfeccionar el arte de trabajar el cuero, 
                combinando técnicas tradicionales con innovación constante.
              </p>
              <p className="text-muted-foreground leading-relaxed font-[var(--font-inter)]">
                Nuestro nombre, Shekiná, representa la presencia divina que guía nuestras manos 
                en cada trabajo que realizamos. Creemos que cada pieza de cuero tiene una historia 
                que contar, y nos enorgullece ser parte de esas historias.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5UXXzH9aYFkUOFQAsSEcZvl3TrH9IV.png"
                    alt="Fachada de Shekiná"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mt-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gyFYwTQ8QcuSHYV72RyWmWGzINA2VF.png"
                    alt="Interior de la tienda"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase font-[var(--font-inter)]">
              Nuestros Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Lo que nos define
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground font-[var(--font-inter)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DBjEoZEZaFG8x0VOS073EQ3XxuYAVi.png"
                  alt="Taller de trabajo con máquinas de coser"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase font-[var(--font-inter)]">
                Nuestro Taller
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Donde la magia sucede
              </h2>
              <p className="text-muted-foreground leading-relaxed font-[var(--font-inter)]">
                Nuestro taller es el corazón de Shekiná. Aquí, rodeados de hilos de colores, 
                cueros de diversas texturas y máquinas de coser que han sido testigos de 
                miles de creaciones, damos vida a cada proyecto.
              </p>
              <p className="text-muted-foreground leading-relaxed font-[var(--font-inter)]">
                Contamos con equipos especializados para trabajo en cuero: máquinas de coser 
                industriales, herramientas de corte de precisión, y todos los implementos 
                necesarios para ofrecer acabados profesionales en cada pieza.
              </p>
              <ul className="space-y-3">
                {[
                  "Máquinas de coser industriales para cuero",
                  "Área de corte y preparación de materiales",
                  "Estación de tintura y acabados",
                  "Exhibición de productos terminados"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 font-[var(--font-inter)]">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-sidebar text-sidebar-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block text-sm font-medium text-sidebar-primary tracking-wider uppercase font-[var(--font-inter)]">
              Nuestra Trayectoria
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Un camino de dedicación
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-sidebar-border hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`lg:flex items-center ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="bg-sidebar-accent p-6 rounded-xl">
                      <span className="text-2xl font-bold text-sidebar-primary">{item.year}</span>
                      <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                      <p className="text-sidebar-foreground/70 mt-2 font-[var(--font-inter)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-sidebar-primary absolute left-1/2 -translate-x-1/2" 
                       style={{ top: `${(index * 25) + 5}%` }} />
                  
                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para conocernos?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-[var(--font-inter)]">
            Te invitamos a visitar nuestro taller y descubrir por qué somos la opción 
            preferida para reparación de calzado y artículos de cuero en la ciudad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contacto">
                Ver ubicación
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/servicios">
                Ver servicios
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
