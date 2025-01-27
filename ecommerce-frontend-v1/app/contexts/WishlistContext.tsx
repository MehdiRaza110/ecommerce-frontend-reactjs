"use client"

import { createContext, useContext, useState, useEffect } from "react"

interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
}

interface UserWishlist {
  userId: number
  items: WishlistItem[]
}

interface WishlistContextType {
  wishlist: WishlistItem[]
  addToWishlist: (userId: number, item: WishlistItem) => void
  removeFromWishlist: (userId: number, id: number) => void
  isInWishlist: (userId: number, id: number) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [userWishlists, setUserWishlists] = useState<UserWishlist[]>([])

  useEffect(() => {
    const savedWishlists = localStorage.getItem("userWishlists")
    if (savedWishlists) {
      setUserWishlists(JSON.parse(savedWishlists))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("userWishlists", JSON.stringify(userWishlists))
  }, [userWishlists])

  const addToWishlist = (userId: number, item: WishlistItem) => {
    setUserWishlists((prev) => {
      const userWishlistIndex = prev.findIndex((uw) => uw.userId === userId)
      if (userWishlistIndex >= 0) {
        const updatedUserWishlist = { ...prev[userWishlistIndex] }
        if (!updatedUserWishlist.items.some((i) => i.id === item.id)) {
          updatedUserWishlist.items.push(item)
        }
        const newUserWishlists = [...prev]
        newUserWishlists[userWishlistIndex] = updatedUserWishlist
        return newUserWishlists
      } else {
        return [...prev, { userId, items: [item] }]
      }
    })
  }

  const removeFromWishlist = (userId: number, id: number) => {
    setUserWishlists((prev) => {
      const userWishlistIndex = prev.findIndex((uw) => uw.userId === userId)
      if (userWishlistIndex >= 0) {
        const updatedUserWishlist = { ...prev[userWishlistIndex] }
        updatedUserWishlist.items = updatedUserWishlist.items.filter((item) => item.id !== id)
        const newUserWishlists = [...prev]
        newUserWishlists[userWishlistIndex] = updatedUserWishlist
        return newUserWishlists
      }
      return prev
    })
  }

  const isInWishlist = (userId: number, id: number) => {
    const userWishlist = userWishlists.find((uw) => uw.userId === userId)
    return userWishlist ? userWishlist.items.some((item) => item.id === id) : false
  }

  const getCurrentUserWishlist = (userId: number) => {
    const userWishlist = userWishlists.find((uw) => uw.userId === userId)
    return userWishlist ? userWishlist.items : []
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist: getCurrentUserWishlist(1), // Assuming John Doe's ID is 1
        addToWishlist: (item) => addToWishlist(1, item), // Assuming John Doe's ID is 1
        removeFromWishlist: (id) => removeFromWishlist(1, id), // Assuming John Doe's ID is 1
        isInWishlist: (id) => isInWishlist(1, id), // Assuming John Doe's ID is 1
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

