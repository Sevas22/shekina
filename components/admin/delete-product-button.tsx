"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { deleteProduct } from "@/lib/actions/admin-products"

export function DeleteProductButton({
  id,
  name,
}: {
  id: string
  name: string
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function onDelete() {
    if (!confirm(`¿Eliminar "${name}"? Esta acción no se puede deshacer.`)) return
    setLoading(true)
    try {
      await deleteProduct(id)
      toast.success("Producto eliminado")
      router.refresh()
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error al eliminar")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      type="button"
      variant="destructive"
      size="sm"
      disabled={loading}
      onClick={() => void onDelete()}
    >
      Eliminar
    </Button>
  )
}
