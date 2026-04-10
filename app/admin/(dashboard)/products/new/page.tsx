import { ProductForm } from "@/components/admin/product-form"

export default function NewProductPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold">
          Nuevo producto
        </h1>
        <p className="mt-2 text-muted-foreground font-[var(--font-inter)]">
          Completá los datos y al menos una imagen (URL o archivo).
        </p>
      </div>
      <ProductForm />
    </div>
  )
}
