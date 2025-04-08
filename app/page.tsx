import Link from "next/link"
import { Crown, Diamond, Shield, Server, Cpu, Globe, Zap } from "lucide-react"
import { getServiceCategories } from "@/lib/blesta-api"

export default async function Home() {
  const categories = await getServiceCategories()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-white opacity-30 animate-float">
          <Server size={60} />
        </div>
        <div className="absolute bottom-40 right-20 text-white opacity-30 animate-float-delayed">
          <Cpu size={50} />
        </div>
        <div className="absolute top-1/2 left-20 text-white opacity-30 animate-float" style={{ animationDelay: "2s" }}>
          <Globe size={40} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full glass mb-6">
              <Diamond className="h-4 w-4 mr-2 text-amber-300" /> Ultra-Premium Cloud Hosting
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300 animate-gradient luxury-text">
                Cloud Excellence
              </span>
              <span>Redefined</span>
            </h1>

            <p className="text-xl text-white/80 mb-10">
              Experience unparalleled luxury in cloud hosting. Where exceptional performance meets
              <span className="text-amber-300"> exquisite reliability</span>. Crafted for the discerning client who
              demands nothing but the finest.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/plans"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-medium transition-colors"
              >
                Explore Plans
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full glass-button text-white hover:text-amber-300 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose <span className="text-amber-300">VestroCloud</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our premium cloud hosting solutions are designed to provide unmatched performance, reliability, and
              security for your applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600/30 flex items-center justify-center">
                <Zap className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Lightning Performance</h3>
              <p className="text-white/70">
                Powered by the latest NVMe SSD storage and high-performance processors for blazing-fast response times.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600/30 flex items-center justify-center">
                <Shield className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Enterprise Security</h3>
              <p className="text-white/70">
                Advanced DDoS protection, automated backups, and 24/7 security monitoring to keep your data safe.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-600/30 flex items-center justify-center">
                <Crown className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Premium Support</h3>
              <p className="text-white/70">
                Dedicated support team available 24/7/365 to assist you with any questions or issues you may have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our <span className="text-amber-300">Premium Services</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover our range of high-performance cloud hosting solutions tailored to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/plans?category=${category.id}`}
                className="glass-card rounded-xl p-6 text-center hover:cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600/30 flex items-center justify-center">
                  {category.icon === "server" && <Server className="h-8 w-8 text-amber-300" />}
                  {category.icon === "gamepad-2" && <div className="h-8 w-8 text-amber-300">🎮</div>}
                  {category.icon === "globe" && <Globe className="h-8 w-8 text-amber-300" />}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{category.name}</h3>
                <p className="text-white/70">{category.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/plans"
              className="px-6 py-3 rounded-full glass-button text-white hover:text-amber-300 transition-colors"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Experience <span className="text-amber-300">Premium Cloud Hosting</span>?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join thousands of satisfied customers who trust VestroCloud for their hosting needs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/plans"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-medium transition-colors"
              >
                Get Started Now
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full glass-button text-white hover:text-amber-300 transition-colors"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
