import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Scissors, Wrench, PaintBucket, Ruler, Clock, Shield, Award, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Servicios | Shekiná - Reparación de Calzado",
  description: "Servicios de reparación de calzado, confección de artículos de cuero, restauración y trabajos a medida.",
}

const mainServices = [
  {
    icon: Wrench,
    title: "Reparación de Calzado",
    description: "Damos nueva vida a tu calzado favorito con reparaciones profesionales que prolongan su uso por muchos años más.",
    features: [
      "Cambio de suelas y medias suelas",
      "Reparación y cambio de tacones",
      "Costura y refuerzo de costuras",
      "Cambio de cierres y hebillas",
      "Ensanchamiento de calzado",
      "Reparación de plantillas",
    ],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
  },
  {
    icon: Scissors,
    title: "Confección en Cuero",
    description: "Elaboramos artículos de cuero con dedicación artesanal, utilizando materiales de primera calidad para productos únicos.",
    features: [
      "Billeteras y tarjeteros",
      "Cinturones personalizados",
      "Bolsos y carteras",
      "Fundas para celulares y tablets",
      "Llaveros y accesorios",
      "Artículos corporativos",
    ],
    image: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=600&h=400&fit=crop",
  },
  {
    icon: PaintBucket,
    title: "Restauración de Cuero",
    description: "Recuperamos la belleza original de tus artículos de cuero con tratamientos profesionales de limpieza, tintura e hidratación.",
    features: [
      "Limpieza profunda de cuero",
      "Tintura y cambio de color",
      "Hidratación y acondicionamiento",
      "Reparación de rasgaduras",
      "Eliminación de manchas",
      "Protección y sellado",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    icon: Ruler,
    title: "Trabajos a Medida",
    description: "Creamos piezas exclusivas según tus especificaciones exactas, desde el diseño inicial hasta el producto terminado.",
    features: [
      "Diseño personalizado",
      "Selección de materiales",
      "Grabados y bordados",
      "Ajustes de talla",
      "Réplicas de diseños",
      "Proyectos especiales",
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
]

const features = [
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Trabajos listos en el menor tiempo posible sin sacrificar calidad",
  },
  {
    icon: Shield,
    title: "Garantía de Calidad",
    description: "Respaldamos todos nuestros trabajos con garantía de satisfacción",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Más de 20 años perfeccionando el arte de la marroquinería",
  },
]

export default function ServiciosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase font-[var(--font-inter)]">
              Nuestros Servicios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Artesanía de calidad para tu <span className="text-primary">calzado y cuero</span>
            </h1>
            <p className="text-lg text-muted-foreground font-[var(--font-inter)]">
              Ofrecemos una gama completa de servicios de reparación, confección y restauración 
              con la más alta calidad artesanal.
            </p>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-primary-foreground/80 font-[var(--font-inter)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed font-[var(--font-inter)]">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm font-[var(--font-inter)]">
                      <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-[#25D366] hover:bg-[#20BA5C] text-white">
                  <Link href={`https://wa.me/573001234567?text=${encodeURIComponent(`Hola, me gustaría información sobre: ${service.title}`)}`} target="_blank">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Cotizar este servicio
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sidebar text-sidebar-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes un proyecto especial en mente?
          </h2>
          <p className="text-sidebar-foreground/70 max-w-2xl mx-auto mb-8 font-[var(--font-inter)]">
            Cuéntanos tu idea y te ayudaremos a hacerla realidad. Nos especializamos en 
            trabajos personalizados y soluciones creativas para todas tus necesidades de cuero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground">
              <Link href="https://wa.me/573001234567" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar por WhatsApp
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-sidebar-foreground/30 text-sidebar-foreground hover:bg-sidebar-accent">
              <Link href="/contacto">
                Ver ubicación
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
