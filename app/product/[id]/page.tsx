import Image from "next/image"
import { notFound } from "next/navigation"
import { AddToCartButton } from "../../components/AddToCartButton"
import { RatingStars } from "../../components/RatingStars"
import { useRouter } from "next/navigation"
import { useCart } from "../../contexts/CartContext"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Stylish Watch",
    price: 199.99,
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=300",
    description: "A sleek and stylish watch for any occasion.",
  },
  {
    id: 2,
    name: "Leather Bag",
    price: 129.99,
    rating: 3.8,
    image: "/placeholder.svg?height=300&width=300",
    description: "A durable and fashionable leather bag.",
  },
  {
    id: 3,
    name: "Sunglasses",
    price: 79.99,
    rating: 4.2,
    image: "/placeholder.svg?height=300&width=300",
    description: "Protect your eyes in style with these sunglasses.",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 149.99,
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=300",
    description: "Comfortable and supportive shoes for your runs.",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 89.99,
    rating: 4.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "High-quality sound in a compact, wireless design.",
  },
  {
    id: 6,
    name: "Smart Speaker",
    price: 129.99,
    rating: 4.3,
    image: "/placeholder.svg?height=300&width=300",
    description: "A voice-controlled speaker for your smart home.",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id, 10))
  const router = useRouter()
  const { addToCart } = useCart()

  if (!product) {
    notFound()
  }

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

