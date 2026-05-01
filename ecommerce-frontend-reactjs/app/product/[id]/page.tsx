import { notFound } from "next/navigation"
import { ProductDetails } from "../../components/ProductDetails"

// These images should be placed in your /public folder
const products = [
    {
        id: 1,
        name: "Stylish Watch",
        price: 199.99,
        rating: 4.5,
        image: "/watch.jpg",
        description: "A sleek and stylish watch for any occasion.",
    },
    {
        id: 2,
        name: "Leather Bag",
        price: 129.99,
        rating: 3.8,
        image: "/bag.jpg",
        description: "A durable and fashionable leather bag.",
    },
    {
        id: 3,
        name: "Sunglasses",
        price: 79.99,
        rating: 4.2,
        image: "/sunglasses.jpg",
        description: "Protect your eyes in style with these sunglasses.",
    },
    {
        id: 4,
        name: "Running Shoes",
        price: 149.99,
        rating: 4.7,
        image: "/shoes.jpg",
        description: "Comfortable and supportive shoes for your runs.",
    },
    {
        id: 5,
        name: "Wireless Earbuds",
        price: 89.99,
        rating: 4.0,
        image: "/earbuds.jpg",
        description: "High-quality sound in a compact, wireless design.",
    },
    {
        id: 6,
        name: "Smart Speaker",
        price: 129.99,
        rating: 4.3,
        image: "/speaker.jpg",
        description: "A voice-controlled speaker for your smart home.",
    },
]

export default function ProductPage({ params }: { params: { id: string } }) {
    // Convert params.id to a number to match the product id type
    const product = products.find((p) => p.id === Number.parseInt(params.id, 10))

    if (!product) {
        notFound()
    }

    return <ProductDetails product={product} />
}