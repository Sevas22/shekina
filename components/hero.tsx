import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IconArrowRight, IconSparkle, IconShield, IconAward } from "@/components/icons"

/** Fotos propias en /public/hero — reemplazá el archivo manteniendo el nombre para actualizar el banner */
const HERO_IMAGE = "/hero/banner-artesano.png"

const features = [
  {
    icon: IconSparkle,
    title: "Artesanía real",
    text: "Cada trabajo pasa por manos que conocen el oficio.",
  },
  {
    icon: IconShield,
    title: "Durabilidad",
    text: "Reparaciones y piezas hechas para el uso diario.",
  },
  {
    icon: IconAward,
    title: "Tradición viva",
    text: "Más de 20 años honrando el cuero y el calzado.",
  },
] as const

export function Hero() {
  return (
    <section className="relative min-h-[100svh] min-h-[100dvh] flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Taller Shekiná: trabajo artesanal en máquina y cuero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[65%_center] md:object-center scale-[1.02]"
        />
        {/* Lectura editorial: más oscuro a la izquierda (texto) y abajo */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/50 to-transparent sm:from-black/85 sm:via-black/35 md:max-w-[78%] md:from-black/80"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/50"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_70%_50%,transparent_0%,rgba(0,0,0,0.35)_100%)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-6 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-32 md:px-10 lg:px-12 lg:pb-14 lg:pt-36">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <p className="font-[var(--font-inter)] text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[oklch(0.78_0.11_78)] md:text-xs">
            Manos que dejan huella
          </p>

          <h1 className="font-[family-name:var(--font-playfair)] text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-white text-balance sm:text-5xl md:text-[3.25rem] lg:text-[3.75rem] lg:leading-[1.08]">
            Tradición que{" "}
            <span className="font-[family-name:var(--font-dancing)] text-[1.12em] font-normal text-[oklch(0.82_0.12_78)] not-italic">
              transforma
            </span>{" "}
            cada pieza.
          </h1>

          <p className="max-w-xl font-[var(--font-inter)] text-base leading-relaxed text-white/85 md:text-lg">
            Reparación de calzado y marroquinería en nuestro taller. Trabajo real, herramientas de
            oficio y acabados que perduran.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-none border-0 bg-[oklch(0.74_0.11_78)] px-8 font-[var(--font-inter)] text-sm font-semibold uppercase tracking-[0.12em] text-stone-950 shadow-lg shadow-black/25 transition hover:bg-[oklch(0.78_0.1_78)]"
            >
              <Link href="/tienda">
                Ver tienda
                <IconArrowRight className="ml-2 w-4 h-4" size={16} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-none border-white/50 bg-transparent font-[var(--font-inter)] text-sm font-medium uppercase tracking-[0.1em] text-white backdrop-blur-[2px] hover:bg-white/10 hover:text-white"
            >
              <Link href="/nosotros">Conocer el taller</Link>
            </Button>
          </div>
        </div>

        <div className="mt-14 grid max-w-4xl gap-8 border-t border-white/15 pt-10 md:mt-20 md:grid-cols-3 md:gap-10 md:pt-12">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 md:block md:space-y-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[oklch(0.78_0.11_78)]/50 bg-black/20 text-[oklch(0.82_0.11_78)] md:h-12 md:w-12">
                <Icon size={22} className="md:h-6 md:w-6" />
              </div>
              <div>
                <p className="font-[var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.82_0.11_78)]">
                  {title}
                </p>
                <p className="mt-1.5 font-[var(--font-inter)] text-sm leading-relaxed text-white/75">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14">
          <p className="font-[var(--font-inter)] text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[oklch(0.76_0.1_78)]">
            Tecnología que impulsa el oficio
          </p>
          <p className="mt-2 font-[family-name:var(--font-playfair)] text-lg italic text-white/90 md:text-xl">
            Pasión que se nota en cada costura.
          </p>
        </div>
      </div>
    </section>
  )
}
