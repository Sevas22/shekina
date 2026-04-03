import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram, Facebook } from "lucide-react"

export const metadata = {
  title: "Contacto | Shekiná - Reparación de Calzado",
  description: "Visítanos en nuestro local o contáctanos por WhatsApp. Estamos listos para atenderte.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Calle Principal #123", "Centro, Ciudad"],
    action: {
      label: "Ver en Google Maps",
      href: "https://maps.google.com/?q=4.6097,-74.0817",
    },
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+57 300 123 4567", "+57 (1) 234 5678"],
    action: {
      label: "Llamar ahora",
      href: "tel:+573001234567",
    },
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lunes a Viernes: 8:00 AM - 6:00 PM", "Sábado: 9:00 AM - 2:00 PM"],
    action: null,
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@shekina.com"],
    action: {
      label: "Enviar email",
      href: "mailto:info@shekina.com",
    },
  },
]

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase font-[var(--font-inter)]">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Estamos aquí para <span className="text-primary">ayudarte</span>
            </h1>
            <p className="text-lg text-muted-foreground font-[var(--font-inter)]">
              Visítanos en nuestro taller o comunícate con nosotros. Estaremos encantados de 
              atender tus consultas y ayudarte con tus proyectos de cuero.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                {item.details.map((detail, dIndex) => (
                  <p key={dIndex} className="text-sm text-muted-foreground font-[var(--font-inter)]">
                    {detail}
                  </p>
                ))}
                {item.action && (
                  <a
                    href={item.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-medium text-primary hover:underline font-[var(--font-inter)]"
                  >
                    {item.action.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-[#25D366] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">¿Prefieres WhatsApp?</h2>
                <p className="text-white/90 font-[var(--font-inter)]">
                  Es la forma más rápida de contactarnos para cotizaciones y consultas
                </p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-white text-[#25D366] hover:bg-white/90">
              <Link href="https://wa.me/573001234567?text=Hola,%20me%20gustaría%20obtener%20información" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chatear ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Nuestra Ubicación</h2>
            <p className="text-muted-foreground font-[var(--font-inter)]">
              Encuéntranos fácilmente en el centro de la ciudad
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5252769097257!2d-74.08388812397692!3d4.6097100438093545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a1f3c5c5c5%3A0x1234567890abcdef!2sCentro%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Ubicación de Shekiná"
            />
            
            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm bg-card p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-2">Shekiná - Reparación de Calzado</h3>
              <p className="text-sm text-muted-foreground mb-4 font-[var(--font-inter)]">
                Calle Principal #123, Centro<br />
                Ciudad, Colombia
              </p>
              <div className="flex gap-3">
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                  <Link href="https://maps.google.com/?q=4.6097,-74.0817" target="_blank">
                    Cómo llegar
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href="tel:+573001234567">
                    Llamar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Síguenos en Redes Sociales</h2>
          <p className="text-muted-foreground mb-8 font-[var(--font-inter)]">
            Mantente al día con nuestros trabajos, promociones y novedades
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "¿Necesito cita previa?",
                a: "No es necesario. Puedes visitarnos directamente en nuestro horario de atención. Sin embargo, para trabajos especiales o de gran volumen, te recomendamos contactarnos previamente.",
              },
              {
                q: "¿Cuánto tiempo toma una reparación?",
                a: "Depende del tipo de trabajo. Reparaciones sencillas pueden estar listas el mismo día. Trabajos más elaborados pueden tomar de 3 a 7 días hábiles.",
              },
              {
                q: "¿Trabajan con cualquier tipo de cuero?",
                a: "Sí, trabajamos con todo tipo de cueros: vacuno, caprino, exóticos y sintéticos. Evaluamos cada caso para ofrecerte el mejor resultado posible.",
              },
              {
                q: "¿Ofrecen garantía en sus trabajos?",
                a: "Sí, todos nuestros trabajos cuentan con garantía. Te explicamos los términos específicos al momento de la entrega.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground font-[var(--font-inter)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
