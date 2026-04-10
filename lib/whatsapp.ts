import { WHATSAPP_PHONE } from "@/lib/site-config"
import type { Product } from "@/lib/products-types"

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_PHONE}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function getProductPurchaseMessage(product: Product) {
  return `¡Hola! Me interesa comprar: *${product.name}* — ${product.price}. ¿Está disponible?`
}

export function getProductPurchaseUrl(product: Product) {
  return getWhatsAppUrl(getProductPurchaseMessage(product))
}
