import Link from "next/link"
import { AdminProviders } from "@/app/admin/providers"
import { AdminSignOut } from "@/components/admin/admin-sign-out"

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminProviders>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
            <div className="flex items-center gap-6">
              <Link
                href="/admin"
                className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground"
              >
                Shekiná Admin
              </Link>
              <nav className="hidden gap-4 text-sm font-medium text-muted-foreground sm:flex">
                <Link href="/admin" className="hover:text-primary">
                  Inicio
                </Link>
                <Link href="/admin/products" className="hover:text-primary">
                  Productos
                </Link>
                <Link href="/tienda" className="hover:text-primary" target="_blank">
                  Ver tienda
                </Link>
              </nav>
            </div>
            <AdminSignOut />
          </div>
        </header>
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">{children}</div>
      </div>
    </AdminProviders>
  )
}
