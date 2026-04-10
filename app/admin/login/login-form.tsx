"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({ callbackUrl }: { callbackUrl: string }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const res = await signIn("credentials", {
      email: email.trim(),
      password,
      redirect: false,
    })
    setLoading(false)
    if (res?.error) {
      setError("Email o contraseña incorrectos.")
      return
    }
    window.location.href = callbackUrl
  }

  return (
    <div className="w-full max-w-md space-y-8 rounded-2xl border border-border bg-card p-8 shadow-lg">
      <div className="text-center space-y-2">
        <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">
          Panel administrador
        </h1>
        <p className="text-sm text-muted-foreground font-[var(--font-inter)]">
          Shekiná — gestión de productos
        </p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="font-[var(--font-inter)]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="font-[var(--font-inter)]"
          />
        </div>
        {error && (
          <p className="text-sm text-destructive font-[var(--font-inter)]">{error}</p>
        )}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Entrando…" : "Entrar"}
        </Button>
      </form>
      <p className="text-center text-sm text-muted-foreground font-[var(--font-inter)]">
        <Link href="/" className="text-primary hover:underline">
          Volver al sitio
        </Link>
      </p>
    </div>
  )
}
