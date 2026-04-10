import { LoginForm } from "./login-form"

type Props = {
  searchParams: Promise<{ callbackUrl?: string }>
}

export default async function AdminLoginPage({ searchParams }: Props) {
  const sp = await searchParams
  const callbackUrl = sp.callbackUrl?.startsWith("/") ? sp.callbackUrl : "/admin"

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 px-4">
      <LoginForm callbackUrl={callbackUrl} />
    </div>
  )
}
