import type { ShekinaIconProps } from "./icon-base"
import { iconAttrs } from "./icon-base"

export function IconWallet(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M4.5 8.5V17a2 2 0 002 2h11a2 2 0 002-2V8.5" />
      <path d="M4.5 8.5V7a2 2 0 012-2h11a2 2 0 012 2v1.5" />
      <path d="M4.5 8.5h15v4.5h-4a2.5 2.5 0 100 5h4V19" />
      <circle cx="16.5" cy="13.25" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconBelt(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M4 12h16" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M2 12h2M20 12h2" />
      <path d="M6 10.5v3M18 10.5v3" opacity={0.5} />
    </svg>
  )
}

export function IconBag(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M8.5 9V7.5a3.5 3.5 0 017 0V9" />
      <path d="M5.5 9h13l1 12H4.5l1-12z" />
      <path d="M9 13h6" opacity={0.45} />
    </svg>
  )
}

export function IconSparkle(props: ShekinaIconProps) {
  return (
    <svg {...iconAttrs(props)}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
}
