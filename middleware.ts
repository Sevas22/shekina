import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const path = req.nextUrl.pathname
  const isAdminRoute = path.startsWith("/admin")
  const isLogin = path === "/admin/login"
  const session = req.auth
  const isAdmin = session?.user?.role === "ADMIN"

  if (isAdminRoute && !isLogin && !isAdmin) {
    const login = new URL("/admin/login", req.url)
    login.searchParams.set("callbackUrl", path)
    return NextResponse.redirect(login)
  }

  if (isLogin && isAdmin) {
    return NextResponse.redirect(new URL("/admin", req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/admin/:path*"],
}
