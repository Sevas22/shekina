import type { ShekinaIconProps } from "./icon-base"
import { iconAttrs } from "./icon-base"

export function IconChevronLeft(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

export function IconChevronDown(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function IconArrowRight(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconArrowUpRight(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  )
}

export function IconMenu(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  )
}

export function IconClose(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

export function IconCheck(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}
