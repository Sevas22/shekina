import type { ShekinaIconProps } from "./icon-base"
import { iconAttrs } from "./icon-base"

export function IconMapPin(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  )
}

export function IconPhone(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.35 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

export function IconClock(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.5 2" />
    </svg>
  )
}

export function IconMail(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <rect x="3.5" y="6" width="17" height="12" rx="2" />
      <path d="M4 8l7.2 5.4a2 2 0 002.6 0L20 8" />
    </svg>
  )
}

/** Burbuja de chat (WhatsApp / cotización) — estilo Shekiná */
export function IconMessage(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M12 4.5c-4.1 0-7.5 2.8-7.5 6.3 0 1.9 1 3.6 2.6 4.8L5.5 19l3.1-1.1c1 .4 2.1.6 3.4.6 4.1 0 7.5-2.8 7.5-6.3S16.1 4.5 12 4.5z" />
      <path d="M9 10.5h.01M12 10.5h.01M15 10.5h.01" strokeWidth={2} />
    </svg>
  )
}

export function IconInstagram(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.75" />
      <path d="M17.5 7h.01" strokeWidth={2} strokeLinecap="round" />
    </svg>
  )
}

export function IconFacebook(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3.5l.5-4H14V7a1 1 0 011-1h3V2z" />
    </svg>
  )
}
