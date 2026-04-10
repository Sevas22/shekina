import type { ShekinaIconProps } from "./icon-base"
import { iconAttrs } from "./icon-base"

export function IconScissors(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <circle cx="7.5" cy="7.5" r="3" />
      <circle cx="16.5" cy="16.5" r="3" />
      <path d="M10.5 10.5l7 7M14 10l-3.5 3.5" />
    </svg>
  )
}

export function IconWrench(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.8-3.8a6 6 0 01-8 8l-6.9 6.9a2.12 2.12 0 01-3-3l6.9-6.9a6 6 0 018-8l-3.8 3.8z" />
    </svg>
  )
}

export function IconPaint(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M4.5 15.5c0-3 2.5-7 8-7 1.5 0 3 .3 4.2 1" />
      <path d="M4.5 15.5c0 2 1.8 3.5 4 3.5h.5c1.2 0 2.2-1 2.2-2.2 0-1.5-1.2-2.8-2.8-2.8-.8 0-1.5.3-2 .8" />
      <path d="M19 5.5l-3.5 3.5-2-2L17 3.5a1.4 1.4 0 012 0l.7.7a1.4 1.4 0 010 2z" />
    </svg>
  )
}

export function IconRuler(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M4.5 8.5l11-7 4 4-11 7-4-4z" />
      <path d="M8 6l1.5 1.5M10.5 4.5L12 6M13 4l1.5 1.5" />
    </svg>
  )
}

export function IconShield(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M12 3.5l7 3v5c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5v-5l7-3z" />
      <path d="M9.5 12.5l2 2 3.5-4" />
    </svg>
  )
}
