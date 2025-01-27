"use client"

import { useState } from "react"
import { useCart } from "../contexts/CartContext"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
}

export function AddToCartButton({ product }: { product: Product }) {
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Button onClick={handleAddToCart} className={isAdded ? "bg-green-500 hover:bg-green-600" : ""}>
      {isAdded ? "Added to Cart!" : "Add to Cart"}
    </Button>
  )
}

