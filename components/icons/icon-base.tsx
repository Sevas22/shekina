import type { SVGProps } from "react"
import { cn } from "@/lib/utils"

export type ShekinaIconProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  /** Tamaño en px (ancho y alto) */
  size?: number
  /** Si el icono es decorativo (por defecto true; usar title + aria-label si es interactivo) */
  decorative?: boolean
}

export function iconAttrs({
  size = 24,
  className,
  decorative = true,
  ...props
}: ShekinaIconProps) {
  return {
    xmlns: "http://www.w3.org/2000/svg" as const,
    viewBox: "0 0 24 24" as const,
    width: size,
    height: size,
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("shrink-0 text-current", className),
    "aria-hidden": decorative ? true : undefined,
    ...props,
  }
}
