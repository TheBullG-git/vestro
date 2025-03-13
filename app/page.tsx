import Link from "next/link"
import { ArrowRight, Check, Cloud, Crown, Database, Diamond, Globe, Rocket, Shield, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountdownTimer } from "@/components/countdown-timer"
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
                <CountdownTimer targetDate="2024-06-01T00:00:00" />
              </div>

              <div className="w-full max-w-md relative">
                <EmailSignupForm />
                <p className="text-xs text-white/60 mt-2 italic">
                  Join our distinguished clientele for priority access
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
                <Card className="border-white/10 bg-white/10 backdrop-blur-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 rounded-xl">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full p-3 bg-blue-600/50 group-hover:bg-blue-500/50 transition-colors duration-300 border border-blue-300/30">
                      <Rocket className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Extraordinary Speed</h3>
                    <p className="text-white">
                      Meticulously optimized infrastructure with premium SSD storage and global CDN for unrivaled
                      performance.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-white/10 backdrop-blur-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 rounded-xl">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full p-3 bg-purple-600/50 group-hover:bg-purple-500/50 transition-colors duration-300 border border-purple-300/30">
                      <Database className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white">99.99% Uptime Guarantee</h3>
                    <p className="text-white">
                      Sophisticated redundant systems and continuous monitoring ensure your services remain flawlessly
                      online.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-white/10 backdrop-blur-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 rounded-xl">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full p-3 bg-pink-600/50 group-hover:bg-pink-500/50 transition-colors duration-300 border border-pink-300/30">
                      <Globe className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Prestigious Network</h3>
                    <p className="text-white">
                      Strategically positioned in elite data centers worldwide for the most distinguished global
                      presence.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 to-purple-400/50 backdrop-blur-sm"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/20 backdrop-blur-md px-3 py-1 text-sm text-white border border-white/20">
                  <Sparkles className="inline-block h-4 w-4 mr-1 text-amber-300" /> Signature Features
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white drop-shadow-lg">
                The <span className="text-amber-300">Epitome</span> of Hosting Excellence
              </h2>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Why compromise when perfection is within reach? Indulge in premium features crafted for the connoisseur
                of digital excellence.
              </p>
            </div>

            <div className="mt-16 relative">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                {[
                  {
                    icon: <Check className="h-5 w-5 text-white" />,
                    title: "Intelligent Auto Scaling",
                    description:
                      "Resources that elegantly expand with your ambitions, automatically adapting to your needs.",
                    color: "blue",
                    delay: 0,
                  },
                  {
                    icon: <Check className="h-5 w-5 text-white" />,
                    title: "Advanced DDoS Protection",
                    description:
                      "Enterprise-grade security protocols safeguarding your digital assets with unwavering vigilance.",
                    color: "purple",
                    delay: 0.1,
                  },
                  {
                    icon: <Check className="h-5 w-5 text-white" />,
                    title: "Premium SSL Certificates",
                    description:
                      "Complimentary high-assurance certificates ensuring the utmost security for your prestigious domains.",
                    color: "pink",
                    delay: 0.2,
                  },
                  {
                    icon: <Check className="h-5 w-5 text-white" />,
                    title: "Dedicated Concierge Support",
                    description:
                      "Our elite support team stands ready to assist 24/7, providing white-glove service for your every need.",
                    color: "yellow",
                    delay: 0.3,
                  },
                  {
                    icon: <Check className="h-5 w-5 text-white" />,
                    title: "Immaculate Automated Backups",
                    description:
                      "Pristine daily backups with point-in-time recovery, ensuring your valuable data is eternally preserved.",
                    color: "red",
                    delay: 0.4,
                  },
                  {
                    icon: <Check className="h-5 w-5 text-white" />,
                    title: "Seamless One-Click Deployments",
                    description:
                      "Deploy sophisticated applications with a single gesture, embodying effortless technological elegance.",
                    color: "orange",
                    delay: 0.5,
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-${feature.color}-600/30 backdrop-blur-md rounded-xl p-6 shadow-lg border border-${feature.color}-300/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-${feature.color}-500/40`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`rounded-full p-2 bg-${feature.color}-600/50 mr-3 border border-${feature.color}-300/30`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-white">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-400/50 to-pink-400/50 backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-white/20 backdrop-blur-md px-3 py-1 text-sm text-white border border-white/20">
                  Our Philosophy
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-lg">
                  The <span className="text-amber-300">VestroCloud</span> Legacy
                </h2>
                <div className="relative p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/10">
                  <div className="absolute -top-3 -left-3 text-4xl">💬</div>
                  <p className="text-white md:text-xl/relaxed italic">
                    "We've meticulously crafted VestroCloud to deliver an uncompromising hosting experience that
                    transcends ordinary expectations. Our mission is to make the extraordinary accessible to the
                    discerning few who recognize true digital luxury."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center mr-3 border border-amber-300/30">
                      <span className="font-bold text-white">VC</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">Alexander Vestro</p>
                      <p className="text-sm text-white/80">Founder & Chief Visionary</p>
                    </div>
                  </div>
                </div>
                <p className="text-white">
                  Our elite team of virtuosos has architected VestroCloud from first principles, with an unwavering
                  focus on performance, security, and intuitive design—all while maintaining accessibility for the
                  distinguished clientele we serve.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-8 text-base font-medium text-white shadow-[0_0_15px_rgba(251,191,36,0.5)] transition-all hover:shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group border border-amber-300/30">
                    <span className="group-hover:mr-2 transition-all duration-300">Discover Our Vision</span>
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 text-4xl animate-bounce">✨</div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 text-4xl animate-bounce delay-300">🚀</div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-bl-full"></div>

                  <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl font-bold text-white">
                      The <span className="text-amber-300">Quintessence</span> of Hosting
                    </h3>
                    <div className="grid gap-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-600/50 flex items-center justify-center mr-3 border border-blue-300/30">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-white">Unrivaled performance optimization</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-purple-600/50 flex items-center justify-center mr-3 border border-purple-300/30">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-white">Impeccable reliability standards</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pink-600/50 flex items-center justify-center mr-3 border border-pink-300/30">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-white">Generous enterprise-grade storage</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-yellow-600/50 flex items-center justify-center mr-3 border border-yellow-300/30">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-white">Exclusive plans for discerning clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-400/50 to-blue-500/50 backdrop-blur-sm"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/20 backdrop-blur-md px-3 py-1 text-sm text-white border border-white/20">
                  <Crown className="inline-block h-4 w-4 mr-1 text-amber-300" /> Exclusive Access
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white drop-shadow-lg">
                  Join Our <span className="text-amber-300">Distinguished</span> Clientele
                </h2>
                <p className="max-w-[600px] text-white md:text-xl/relaxed">
                  Secure your position among the elite. Register now for privileged updates and extraordinary launch
                  offers.
                </p>
              </div>
            </div>

            <div className="w-full max-w-sm mx-auto space-y-2 mt-8">
              <EmailSignupForm />
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-blue-300/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600/50 flex items-center justify-center border border-blue-300/30">
                  <span className="text-3xl">🎁</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Privileged Early Access</h3>
                <p className="text-white">
                  Be among the select few to experience our premium hosting before the world.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-purple-300/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600/50 flex items-center justify-center border border-purple-300/30">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Expedited Priority Access</h3>
                <p className="text-white">
                  Bypass the queue with our VIP fast-track for immediate service upon launch.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-pink-300/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-600/50 flex items-center justify-center border border-pink-300/30">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Concierge Support</h3>
                <p className="text-white">
                  Enjoy our white-glove support service for the first quarter, complimentary.
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-12">
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-white/10 relative z-10">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cloud className="h-6 w-6 text-amber-300" />
                <span className="font-bold text-xl text-white">VestroCloud</span>
              </div>
              <p className="text-sm text-white mb-4">
                The epitome of cloud hosting excellence. Unparalleled quality for the discerning client.
              </p>
              <p className="text-sm text-white">&copy; {new Date().getFullYear()} VestroCloud. All rights reserved.</p>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white hover:text-amber-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white hover:text-amber-300 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white hover:text-amber-300 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white hover:text-amber-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white hover:text-amber-300 transition-colors">
                    Premium Hosting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white hover:text-amber-300 transition-colors">
                    Luxury Cloud Servers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white hover:text-amber-300 transition-colors">
                    Elite WordPress
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white hover:text-amber-300 transition-colors">
                    Prestigious Domains
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white hover:text-amber-300 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white hover:text-amber-300 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white hover:text-amber-300 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

