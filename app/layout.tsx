import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: "Airena - AI-Powered Are.na Intelligence",
  description: "Transform your curated Are.na channels into an intelligent agent",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black font-sans">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <header className="py-6 flex justify-between items-center border-b border-black">
            <Link href="/" className="text-xl font-bold">
              **
            </Link>
            <div className="flex gap-6">
              <a href="/login" className="underline">
                Log in
              </a>
              <a href="/signup" className="underline">
                Sign up
              </a>
            </div>
          </header>
          <main>{children}</main>
          <footer className="py-6 mt-12 border-t border-black text-sm">
            <div className="flex justify-between">
              <div>© Airena {new Date().getFullYear()}</div>
              <div className="flex gap-6">
                <a href="/about" className="underline">
                  About
                </a>
                <a href="/terms" className="underline">
                  Terms
                </a>
                <a href="/privacy" className="underline">
                  Privacy
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
