import type { ShekinaIconProps } from "./icon-base"
import { iconAttrs } from "./icon-base"

/**
 * Marca decorativa Shekiná: curva tipo piel cosida + puntos de costura.
 * Uso: favicon inline, watermark, estados vacíos, hero secundario.
 */
export function IconShekinaMark(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs({ ...props, decorative: props.decorative ?? true })}>
      <path d="M5 14.5c2.5-4 5.5-6 9-6s6.5 2 8 5.5" opacity={0.85} />
      <path d="M4.5 17c2-5 6-8.5 11-8.5 3.5 0 6.5 1.8 8.5 5" />
      <circle cx="7" cy="17.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="18.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14" cy="18.5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M17.5 17.5l2 2.5" opacity={0.6} />
    </svg>
  )
}
