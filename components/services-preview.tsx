import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  IconArrowRight,
  IconScissors,
  IconWrench,
  IconPaint,
  IconRuler,
} from "@/components/icons"

const services = [
  {
    icon: IconWrench,
    title: "Reparación de Calzado",
    description: "Cambio de suelas, tacones, costuras y renovación completa de tu calzado favorito.",
  },
  {
    icon: IconScissors,
    title: "Confección en Cuero",
    description: "Elaboramos billeteras, cinturones, bolsos y accesorios a medida con cuero de primera calidad.",
  },
  {
    icon: IconPaint,
    title: "Restauración",
    description: "Devolvemos la vida a tus artículos de cuero con tintura, hidratación y acabados profesionales.",
  },
  {
    icon: IconRuler,
    title: "Trabajos a Medida",
    description: "Creamos piezas únicas según tus especificaciones, desde diseño hasta el producto final.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase font-[var(--font-inter)]">
              Servicios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold max-w-lg">
              Artesanía profesional para tu calzado y cuero
            </h2>
          </div>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 w-fit group">
            <Link href="/servicios">
              Ver todos los servicios
              <IconArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-[var(--font-inter)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
