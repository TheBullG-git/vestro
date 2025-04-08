import type { ReactNode } from "react"
import Link from "next/link"
import { Cloud, ArrowLeft } from "lucide-react"
import { StarField } from "@/components/star-field"

export default function PolicyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white relative">
      <StarField />

      <header className="px-4 lg:px-6 h-20 flex items-center z-10 relative">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Cloud className="h-8 w-8 text-white animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
            </span>
          </div>
          <Link
            href="/"
            className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-200"
          >
            VestroCloud
          </Link>
        </div>
        <div className="ml-auto flex items-center">
          <Link
            href="/"
            className="text-sm font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6 md:p-8 max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      <footer className="py-6 px-4 bg-blue-900/50 backdrop-blur-md border-t border-white/10 z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VestroCloud. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/policies/privacy" className="text-white/60 hover:text-amber-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policies/terms" className="text-white/60 hover:text-amber-300 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/policies/refund" className="text-white/60 hover:text-amber-300 text-sm transition-colors">
              Refund Policy
            </Link>
            <Link href="/policies/shipping" className="text-white/60 hover:text-amber-300 text-sm transition-colors">
              Service Delivery
            </Link>
            <Link href="/policies/contact" className="text-white/60 hover:text-amber-300 text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
