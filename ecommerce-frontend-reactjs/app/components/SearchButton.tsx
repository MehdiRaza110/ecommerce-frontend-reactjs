"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchButton() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching...")
    setIsSearchOpen(false)
  }

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
        <Search className="h-5 w-5" />
      </Button>
      {isSearchOpen && (
        <form onSubmit={handleSearch} className="absolute right-0 top-full mt-2 bg-white shadow-md rounded-md p-2">
          <Input type="search" placeholder="Search..." className="w-64" autoFocus />
        </form>
      )}
    </div>
  )
}

