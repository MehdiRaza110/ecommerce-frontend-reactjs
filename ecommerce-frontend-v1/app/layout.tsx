import "./globals.css"
import { Inter } from "next/font/google"
import { CartProvider } from "./contexts/CartContext"
import { WishlistProvider } from "./contexts/WishlistContext"
import { Header } from "./components/Header"
import { MobileNav } from "./components/MobileNav"
import { WishlistReminder } from "./components/WishlistReminder"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "E-commerce Store",
  description: "Your one-stop shop for all your needs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            <main className="container mx-auto px-4 py-8 mt-20">{children}</main>
            <MobileNav />
            <WishlistReminder />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}

