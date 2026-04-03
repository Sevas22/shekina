/** Número para wa.me: código país + número sin + ni espacios (ej. Colombia 57...) */
export const WHATSAPP_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "") || "573001234567"

export const SITE_NAME = "Shekiná"
