"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zip: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Order submitted:", formData)
    // Here you would typically send the order to your backend
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <Input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="zip">ZIP Code</Label>
          <Input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
        </div>
        <Button type="submit">Place Order</Button>
      </form>
    </div>
  )
}

