"use client"

import { useWishlist } from "../contexts/WishlistContext"
import { ProductCard } from "../components/ProductCard"

export default function WishlistPage() {
  const { wishlist } = useWishlist()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">John Doe's Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

