"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCart } from "../contexts/CartContext"
import { useWishlist } from "../contexts/WishlistContext"
import { Home, ShoppingBag, ShoppingCart, User, Heart } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: ShoppingBag },
  { name: "Wishlist", href: "/wishlist", icon: Heart },
  { name: "Cart", href: "/cart", icon: ShoppingCart },
  { name: "Account", href: "/account", icon: User },
]

export function MobileNav() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const { cart } = useCart()
  const { wishlist } = useWishlist()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`flex flex-col items-center p-2 relative ${pathname === item.href ? "text-blue-500" : "text-gray-600"}`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs">{item.name}</span>
              {item.name === "Cart" && cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
              {item.name === "Wishlist" && wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

