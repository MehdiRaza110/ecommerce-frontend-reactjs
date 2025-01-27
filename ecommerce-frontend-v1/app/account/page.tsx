"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// John Doe's account data
const johnDoeAccount = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, Anytown, USA 12345",
}

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [accountData, setAccountData] = useState(johnDoeAccount)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    console.log("Saving account data:", accountData)
    setIsEditing(false)
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>John Doe's Account Details</CardTitle>
          <CardDescription>View and manage your account information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={accountData.name} onChange={handleInputChange} disabled={!isEditing} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={accountData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={accountData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={accountData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </CardContent>
        <div className="flex justify-between p-6">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save Changes</Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => setIsEditing(true)}>
                Edit Details
              </Button>
              <Button variant="destructive">Delete Account</Button>
            </>
          )}
        </div>
      </Card>
      <div className="mt-8 space-y-4">
        <Button className="w-full mb-2">Order History</Button>
        <Link href="/wishlist" className="block">
          <Button className="w-full">My Wishlist</Button>
        </Link>
        <Button className="w-full" variant="outline">
          Log Out
        </Button>
      </div>
    </div>
  )
}

