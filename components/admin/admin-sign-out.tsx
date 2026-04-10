"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function AdminSignOut() {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="font-[var(--font-inter)]"
      onClick={() => signOut({ callbackUrl: "/admin/login" })}
    >
      Salir
    </Button>
  )
}
