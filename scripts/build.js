const { execSync } = require("node:child_process")
const fs = require("node:fs")
const path = require("node:path")

/** Carga .env en process.env sin pisar variables ya definidas (p. ej. Vercel). */
function loadEnvFile() {
  const p = path.join(process.cwd(), ".env")
  if (!fs.existsSync(p)) return
  const text = fs.readFileSync(p, "utf8")
  for (const line of text.split(/\r?\n/)) {
    const t = line.trim()
    if (!t || t.startsWith("#")) continue
    const eq = t.indexOf("=")
    if (eq === -1) continue
    const key = t.slice(0, eq).trim()
    let val = t.slice(eq + 1).trim()
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1)
    }
    if (process.env[key] === undefined) process.env[key] = val
  }
}

loadEnvFile()

/** Solo para `prisma generate` si aún no hay URL (p. ej. build sin env en CI). */
const GENERATE_PLACEHOLDER =
  "postgresql://prisma:prisma@127.0.0.1:5432/prisma"

const env = { ...process.env }
if (!env.DATABASE_URL) {
  console.warn(
    "[build] DATABASE_URL ausente: usando valor ficticio solo para prisma generate."
  )
  env.DATABASE_URL = GENERATE_PLACEHOLDER
}

execSync("npx prisma generate", { env, stdio: "inherit", shell: true })

if (!process.env.DATABASE_URL) {
  console.error(
    "\n[build] Falta DATABASE_URL en el entorno de build.\n" +
      "Vercel: Project → Settings → Environment Variables → DATABASE_URL (URL de Postgres).\n" +
      "Marca la variable para los entornos que despliegas (p. ej. Production y Preview).\n"
  )
  process.exit(1)
}

execSync("npx prisma migrate deploy", {
  env: process.env,
  stdio: "inherit",
  shell: true,
})

execSync("npx next build", {
  env: process.env,
  stdio: "inherit",
  shell: true,
})
