"use client"

import Link from "next/link"
import { useCart } from "../contexts/CartContext"
import { useWishlist } from "../contexts/WishlistContext"
import { Home, ShoppingBag, Heart, ShoppingCart, User } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: ShoppingBag },
  { name: "Wishlist", href: "/wishlist", icon: Heart },
  { name: "Cart", href: "/cart", icon: ShoppingCart },
  { name: "Account", href: "/account", icon: User },
]

export function DesktopNav() {
  const { cart } = useCart()
  const { wishlist } = useWishlist()

  return (
    <nav className="hidden md:flex space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-gray-600 hover:text-gray-900 transition-colors relative flex items-center"
        >
          <item.icon className="w-5 h-5 mr-1" />
          {item.name}
          {item.name === "Cart" && cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
          {item.name === "Wishlist" && wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {wishlist.length}
            </span>
          )}
        </Link>
      ))}
    </nav>
  )
}

