import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GalleryShowcase } from "@/components/gallery-showcase"

export const metadata: Metadata = {
  title: "Galería | Shekiná - Reparación de Calzado",
  description:
    "Fotos del local, el taller y el trabajo artesanal de Shekiná. Reparación de calzado y marroquinería.",
}

export default function GaleriaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <GalleryShowcase />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
