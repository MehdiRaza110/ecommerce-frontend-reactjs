"use client"

import { useCart } from "../contexts/CartContext"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trash2 } from "lucide-react"

export default function CartPage() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-semibold mr-4">${(item.price * item.quantity).toFixed(2)}</p>
                  <Button variant="destructive" size="icon" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <div>
              <Link href="/checkout">
                <Button>Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

