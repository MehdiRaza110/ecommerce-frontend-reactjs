"use client"

import Image from "next/image"
import Link from "next/link"
import { StarIcon, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "../contexts/WishlistContext"
import { useCart } from "../contexts/CartContext"
import { useRouter } from "next/navigation"

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image: string
}

export function ProductCard({ product, hideButtons }: { product: Product; hideButtons?: boolean }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { addToCart } = useCart()
  const router = useRouter()

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })
    router.push("/checkout")
  }

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow relative">
      <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10" onClick={handleWishlistToggle}>
        <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}`} />
      </Button>
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
        </div>
      </Link>
      {!hideButtons && (
        <div className="mt-4 flex justify-between gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })
            }}
          >
            Add to Cart
          </Button>
          <Button className="flex-1" onClick={handleBuyNow}>
            Buy Now
          </Button>
        </div>
      )}
    </div>
  )
}

