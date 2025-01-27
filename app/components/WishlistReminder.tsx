"use client"

import { useState, useEffect } from "react"
import { useWishlist } from "../contexts/WishlistContext"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function WishlistReminder() {
  const { wishlist } = useWishlist()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (wishlist.length > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 60000) // Show reminder after 1 minute

      return () => clearTimeout(timer)
    }
  }, [wishlist])

  if (!isVisible || wishlist.length === 0) {
    return null
  }

  return (
    <div className="fixed bottom-20 md:bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-sm z-50">
      <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => setIsVisible(false)}>
        <X className="h-4 w-4" />
      </Button>
      <h3 className="font-semibold mb-2">Don't forget your wishlist items!</h3>
      <p className="text-sm text-gray-600 mb-4">
        You have {wishlist.length} item{wishlist.length > 1 ? "s" : ""} in your wishlist. Consider adding them to your
        cart!
      </p>
      <Button onClick={() => (window.location.href = "/wishlist")}>View Wishlist</Button>
    </div>
  )
}

