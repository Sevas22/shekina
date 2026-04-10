import type { ShekinaIconProps } from "./icon-base"
import { iconAttrs } from "./icon-base"

export function IconHeart(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M12 18.5l-1-.9C6.8 13.4 4 10.8 4 7.7 4 5.3 5.9 3.5 8.2 3.5c1.4 0 2.7.7 3.5 1.8.8-1.1 2.1-1.8 3.5-1.8 2.3 0 4.2 1.8 4.2 4.2 0 3.1-2.8 5.7-7 10.9l-1 .9z" />
    </svg>
  )
}

export function IconUsers(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M16.5 7.5a3 3 0 11-6 0 3 3 0 016 0zM19 19.5v-1.8c0-2-1.6-3.7-4-3.7h-1" />
      <path d="M11.5 5.5a3 3 0 10-6 0 3 3 0 006 0zM13 19.5v-1.8c0-1.3-.6-2.4-1.5-3.2" />
    </svg>
  )
}

export function IconAward(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 14.5L7 20.5l5-2.5 5 2.5-1.5-6" />
    </svg>
  )
}

export function IconTarget(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
