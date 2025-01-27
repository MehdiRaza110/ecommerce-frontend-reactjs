"use client"

import { StarIcon } from "lucide-react"

export function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`w-5 h-5 ${star <= Math.round(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  )
}

