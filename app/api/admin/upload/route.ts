import { auth } from "@/auth"
import { put } from "@vercel/blob"
import { mkdir, writeFile } from "fs/promises"
import path from "path"

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id || session.user.role !== "ADMIN") {
    return Response.json({ error: "No autorizado" }, { status: 401 })
  }

  const form = await req.formData()
  const file = form.get("file")
  if (!(file instanceof Blob) || file.size === 0) {
    return Response.json({ error: "Archivo requerido" }, { status: 400 })
  }

  const buf = Buffer.from(await file.arrayBuffer())
  const original =
    typeof (file as File).name === "string" ? (file as File).name : "imagen"
  const safe = original.replace(/[^a-zA-Z0-9.-]/g, "_")
  const name = `${Date.now()}-${safe}`

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(name, buf, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })
    return Response.json({ url: blob.url })
  }

  const dir = path.join(process.cwd(), "public", "uploads", "products")
  await mkdir(dir, { recursive: true })
  const filepath = path.join(dir, name)
  await writeFile(filepath, buf)
  return Response.json({ url: `/uploads/products/${name}` })
}
