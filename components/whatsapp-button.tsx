"use client"

import { MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export function WhatsAppButton() {
  const href = getWhatsAppUrl(
    "¡Hola! Me gustaría obtener más información sobre sus productos y servicios."
  )

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chatea con nosotros
      </span>
    </a>
  )
}
