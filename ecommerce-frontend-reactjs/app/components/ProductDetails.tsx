"use client"

import { useRouter } from "next/navigation"
import { useCart } from "../contexts/CartContext"
import { Button } from "@/components/ui/button"
import { AddToCartButton } from "./AddToCartButton"
import { RatingStars } from "./RatingStars"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image: string
  description: string
}

export function ProductDetails({ product }: { product: Product }) {
  const router = useRouter()
  const { addToCart } = useCart()

  const handleBuyNow = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })
    router.push("/checkout")
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 pb-20 md:pb-0">
      <div className="md:w-1/2">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={600}
          height={600}
          className="w-full rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
        <div className="mb-4">
          <RatingStars rating={product.rating} />
        </div>
        <div className="flex space-x-4">
          <AddToCartButton product={product} />
          <Button onClick={handleBuyNow}>Buy Now</Button>
        </div>
      </div>
    </div>
  )
}

