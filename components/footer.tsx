import Link from "next/link"
import Image from "next/image"
import {
  IconMapPin,
  IconPhone,
  IconClock,
  IconInstagram,
  IconFacebook,
  IconShekinaMark,
} from "@/components/icons"

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h2iFaLZ0rHHH7blgDbdfkragETquYr.png"
              alt="Shekiná"
              width={140}
              height={45}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-sidebar-foreground/70 leading-relaxed font-[var(--font-inter)]">
              Expertos en reparación de calzado y artículos de cuero. Tradición y calidad artesanal desde hace más de 20 años.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "/" },
                { label: "Tienda", href: "/tienda" },
                { label: "Galería", href: "/galeria" },
                { label: "Servicios", href: "/servicios" },
                { label: "Nosotros", href: "/nosotros" },
                { label: "Contacto", href: "/contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors font-[var(--font-inter)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <IconMapPin className="w-5 h-5 text-sidebar-primary shrink-0 mt-0.5" size={20} />
                <span className="text-sm text-sidebar-foreground/70 font-[var(--font-inter)]">
                  Calle Principal #123, Ciudad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="w-5 h-5 text-sidebar-primary shrink-0" size={20} />
                <span className="text-sm text-sidebar-foreground/70 font-[var(--font-inter)]">
                  +57 300 123 4567
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IconClock className="w-5 h-5 text-sidebar-primary shrink-0 mt-0.5" size={20} />
                <span className="text-sm text-sidebar-foreground/70 font-[var(--font-inter)]">
                  Lun - Sáb: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center hover:bg-sidebar-primary transition-colors"
                aria-label="Instagram"
              >
                <IconInstagram className="w-5 h-5" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center hover:bg-sidebar-primary transition-colors"
                aria-label="Facebook"
              >
                <IconFacebook className="w-5 h-5" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-sidebar-border pt-8">
          <IconShekinaMark
            className="text-sidebar-primary/50"
            size={40}
            aria-hidden
          />
          <p className="text-center text-sm text-sidebar-foreground/50 font-[var(--font-inter)]">
            &copy; {new Date().getFullYear()} Shekiná. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
