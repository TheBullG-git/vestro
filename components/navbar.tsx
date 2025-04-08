"use client"

import { useState } from "react"
import Link from "next/link"
import { Cloud, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-blue-950/30 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Logo on the left, but smaller and without text */}
          <Link href="/" className="absolute left-4 flex items-center">
            <div className="relative">
              <Cloud className="h-6 w-6 text-white animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
            </div>
          </Link>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12 px-8 py-2 rounded-full bg-blue-900/40 backdrop-blur-xl border border-white/10 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
            <Link href="/" className="text-white hover:text-amber-300 transition-colors font-medium">
              Home
            </Link>
            <Link href="/plans" className="text-white hover:text-amber-300 transition-colors font-medium">
              Services
            </Link>
            <Link href="/features" className="text-white hover:text-amber-300 transition-colors font-medium">
              Features
            </Link>
            <Link href="/about" className="text-white hover:text-amber-300 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-amber-300 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none absolute right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass p-4 rounded-lg">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-amber-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/plans"
                className="text-white hover:text-amber-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/features"
                className="text-white hover:text-amber-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-amber-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-amber-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
