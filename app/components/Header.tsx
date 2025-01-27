"use client"

import Link from "next/link"
import { useCart } from "../contexts/CartContext"
import { SearchButton } from "./SearchButton"
import { ShoppingCart } from "lucide-react"
import { DesktopNav } from "./DesktopNav"

export function Header() {
  const { cart } = useCart()

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <Link href="/" className="text-xl font-bold mr-8">
          E-commerce Store
        </Link>
        <DesktopNav />
        <div className="flex items-center space-x-4 ml-auto">
          <SearchButton />
          <Link href="/cart" className="relative md:hidden">
            <ShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

