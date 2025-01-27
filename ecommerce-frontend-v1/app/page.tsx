"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ProductCard } from "./components/ProductCard"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Stylish Watch", price: 199.99, rating: 4.5, image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Leather Bag", price: 129.99, rating: 3.8, image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "Sunglasses", price: 79.99, rating: 4.2, image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "Running Shoes", price: 149.99, rating: 4.7, image: "/placeholder.svg?height=300&width=300" },
  { id: 5, name: "Wireless Earbuds", price: 89.99, rating: 4.0, image: "/placeholder.svg?height=300&width=300" },
  { id: 6, name: "Smart Speaker", price: 129.99, rating: 4.3, image: "/placeholder.svg?height=300&width=300" },
]

export default function Home() {
  const [featuredProduct, setFeaturedProduct] = useState(products[0])

  return (
    <div className="space-y-12 pb-20 md:pb-0">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <p className="text-xl text-gray-600">Discover amazing products at great prices!</p>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Featured Product</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src={featuredProduct.image || "/placeholder.svg"}
              alt={featuredProduct.name}
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold">{featuredProduct.name}</h3>
            <p className="text-xl">${featuredProduct.price.toFixed(2)}</p>
            <Link href={`/product/${featuredProduct.id}`}>
              <Button>View Details</Button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} onClick={() => setFeaturedProduct(product)}>
              <ProductCard product={product} hideButtons />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/products">
            <Button>View All Products</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

