import { Cloud, Crown, Diamond, Shield } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import { EmailSignupForm } from "@/components/email-signup-form"
import { StarField } from "@/components/star-field"
import { FloatingIcons } from "@/components/floating-icons"

export default function Home() {
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
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-200">
            VestroCloud
          </span>
        </div>
        <div className="ml-auto flex items-center">
          <div className="text-sm font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
            <span className="hidden sm:inline">Exclusive</span> Preview
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <FloatingIcons />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-amber-300/30 mb-4">
                <Diamond className="h-4 w-4 mr-2 text-amber-300" /> Ultra-Premium Cloud Hosting
              </div>

              <div className="relative">
                <div className="absolute -top-8 -left-8 text-amber-300 opacity-70 hidden md:block">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3L14.5 8.5L21 9.5L16.5 13.5L17.5 20L12 17L6.5 20L7.5 13.5L3 9.5L9.5 8.5L12 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="absolute -top-8 -right-8 text-amber-300 opacity-70 hidden md:block">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3L14.5 8.5L21 9.5L16.5 13.5L17.5 20L12 17L6.5 20L7.5 13.5L3 9.5L9.5 8.5L12 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase relative luxury-text animate-pulse-glow">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300 animate-gradient drop-shadow-[0_5px_35px_rgba(255,215,0,0.7)]">
                    Arriving Soon
                  </span>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                  <div className="absolute -inset-1 bg-amber-500/20 blur-xl rounded-full"></div>
                </h1>
                <div className="absolute -bottom-8 -left-8 text-amber-300 opacity-70 hidden md:block">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3L14.5 8.5L21 9.5L16.5 13.5L17.5 20L12 17L6.5 20L7.5 13.5L3 9.5L9.5 8.5L12 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-8 -right-8 text-amber-300 opacity-70 hidden md:block">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3L14.5 8.5L21 9.5L16.5 13.5L17.5 20L12 17L6.5 20L7.5 13.5L3 9.5L9.5 8.5L12 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-8 text-white drop-shadow-lg">
                The <span className="text-amber-300">Pinnacle</span> of Cloud Hosting
              </h2>

              <p className="max-w-[700px] mx-auto text-white md:text-xl drop-shadow-md">
                Experience unparalleled luxury in cloud hosting. Where exceptional performance meets
                <span className="text-amber-300"> exquisite reliability</span>. Crafted for the discerning client who
                demands nothing but the finest.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/50 text-white text-sm font-medium border border-blue-300/30 backdrop-blur-md">
                  <Crown className="h-4 w-4 mr-1 text-amber-300" /> Elite Performance
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-600/50 text-white text-sm font-medium border border-purple-300/30 backdrop-blur-md">
                  <Diamond className="h-4 w-4 mr-1 text-amber-300" /> Unmatched Elegance
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-600/50 text-white text-sm font-medium border border-pink-300/30 backdrop-blur-md">
                  <Shield className="h-4 w-4 mr-1 text-amber-300" /> Impeccable Security
                </div>
              </div>

              <div className="w-full max-w-md">
                <p className="text-amber-200 mb-2 italic">Reserve your exclusive position</p>
                <CountdownTimer targetDate="2025-04-13T00:00:00" />
              </div>

              <div className="w-full max-w-md relative">
                <EmailSignupForm />
                <p className="text-xs text-white/60 mt-2 italic">
                  Join our distinguished clientele for priority access
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

