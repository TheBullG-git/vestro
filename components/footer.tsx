import Link from "next/link"
import { Cloud, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-950/50 backdrop-blur-md border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Cloud className="h-6 w-6 text-amber-300" />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-200">
                VestroCloud
              </span>
            </Link>
            <p className="text-white/70 text-sm">
              The epitome of cloud hosting excellence. Unparalleled quality for the discerning client.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-amber-300 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-amber-300 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-amber-300 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-amber-300 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-amber-300 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/plans?category=game" className="text-white/70 hover:text-amber-300 transition-colors">
                  Game Servers
                </Link>
              </li>
              <li>
                <Link href="/plans?category=vps" className="text-white/70 hover:text-amber-300 transition-colors">
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/plans?category=colocation"
                  className="text-white/70 hover:text-amber-300 transition-colors"
                >
                  Colocation
                </Link>
              </li>
              <li>
                <Link href="/plans?category=web" className="text-white/70 hover:text-amber-300 transition-colors">
                  Web Hosting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-300 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-amber-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-amber-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy" className="text-white/70 hover:text-amber-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms" className="text-white/70 hover:text-amber-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/policies/refund" className="text-white/70 hover:text-amber-300 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-300 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-amber-300 mr-2 mt-0.5" />
                <span className="text-white/70">info@vestrocloud.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-300 mr-2 mt-0.5" />
                <span className="text-white/70">
                  Block No. B-1, Umiyaji Park, Kolki Road, Opp. New Police Line, Upleta Lati Plot, Upleta Police
                  Station, Upleta, Gujarat
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          &copy; {new Date().getFullYear()} VestroCloud. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
