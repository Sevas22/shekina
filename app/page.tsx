import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/services-preview"
import { ProductGallery } from "@/components/product-gallery"
import { WorkshopSection } from "@/components/workshop-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesPreview />
      <ProductGallery />
      <WorkshopSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
