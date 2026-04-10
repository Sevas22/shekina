import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { seedProducts } from "../lib/seed-products"

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_SEED_EMAIL ?? "admin@shekina.local"
  const plain = process.env.ADMIN_SEED_PASSWORD ?? "ShekinaAdmin2026"
  const password = await bcrypt.hash(plain, 12)

  await prisma.user.upsert({
    where: { email },
    update: { password },
    create: {
      email,
      password,
      role: "ADMIN",
    },
  })

  for (const p of seedProducts) {
    const urls = [p.image, ...(p.images ?? [])].filter(Boolean)
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        gender: p.gender,
        category: p.category,
        price: p.price,
        description: p.description,
        longDescription: p.longDescription ?? null,
        images: {
          deleteMany: {},
          create: urls.map((url, i) => ({ url, sortOrder: i })),
        },
      },
      create: {
        slug: p.slug,
        name: p.name,
        gender: p.gender,
        category: p.category,
        price: p.price,
        description: p.description,
        longDescription: p.longDescription ?? null,
        images: {
          create: urls.map((url, i) => ({ url, sortOrder: i })),
        },
      },
    })
  }

  console.log("Seed OK. Admin:", email, "| contraseña (solo dev):", plain)
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
