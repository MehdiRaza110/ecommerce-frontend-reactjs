"use client"

import { useState } from "react"
import { ProductCard } from "../components/ProductCard"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Demo products data
const demoProducts = [
  { id: 1, name: "Stylish Watch", price: 199.99, rating: 4.5, image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Leather Bag", price: 129.99, rating: 3.8, image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "Sunglasses", price: 79.99, rating: 4.2, image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "Running Shoes", price: 149.99, rating: 4.7, image: "/placeholder.svg?height=300&width=300" },
  { id: 5, name: "Wireless Earbuds", price: 89.99, rating: 4.0, image: "/placeholder.svg?height=300&width=300" },
  { id: 6, name: "Smart Speaker", price: 129.99, rating: 4.3, image: "/placeholder.svg?height=300&width=300" },
  { id: 7, name: "Fitness Tracker", price: 59.99, rating: 4.1, image: "/placeholder.svg?height=300&width=300" },
  { id: 8, name: "Portable Charger", price: 39.99, rating: 4.4, image: "/placeholder.svg?height=300&width=300" },
  { id: 9, name: "Wireless Mouse", price: 29.99, rating: 4.2, image: "/placeholder.svg?height=300&width=300" },
  { id: 10, name: "Bluetooth Keyboard", price: 49.99, rating: 4.0, image: "/placeholder.svg?height=300&width=300" },
]

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6
  const totalPages = Math.ceil(demoProducts.length / productsPerPage)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = demoProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <h1 className="text-3xl font-bold">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2">
        <Button variant="outline" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <Button variant="outline" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

