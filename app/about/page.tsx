import { Shield, Zap, Clock, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">About</span>{" "}
              VestroCloud
            </h1>
            <p className="text-xl text-white/80">
              Redefining cloud hosting with unparalleled performance, reliability, and customer service.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-white/80 mb-4">
              Proudly Indian company providing hosting since 2021 as TeroHost, then registered in 2025 as VestroCloud
              LLP. There have been many ups and downs, but the VestroCloud team is committed to providing the best
              servers no matter the sleepless nights we endure. We are here to help you grow and give you the best
              experience possible.
            </p>
            <p className="text-white/80 mb-4">
              Our team of cloud infrastructure experts and customer experience specialists came together to build a
              platform that delivers the best of both worlds. We've invested in state-of-the-art hardware, developed
              intuitive management tools, and assembled a support team that truly understands the needs of our clients.
            </p>
            <p className="text-white/80">
              Today, VestroCloud serves customers worldwide, from individual developers to large enterprises. Our
              commitment to excellence remains unwavering as we continue to innovate and expand our services to meet the
              evolving needs of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/80">
                To provide cloud hosting solutions that empower businesses and individuals to achieve their goals
                without being limited by technical constraints or poor support. We strive to make advanced cloud
                technology accessible, reliable, and enjoyable to use for everyone.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-white/80">
                To become the most trusted name in cloud hosting by consistently delivering exceptional performance,
                reliability, and customer service. We envision a world where cloud infrastructure is seamlessly
                integrated into every business, enabling innovation and growth without technical barriers.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600/30 flex items-center justify-center">
                <Zap className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Excellence</h3>
              <p className="text-white/70">
                We strive for excellence in everything we do, from our infrastructure to our customer service.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600/30 flex items-center justify-center">
                <Shield className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Reliability</h3>
              <p className="text-white/70">
                We build systems and processes that our customers can depend on, day in and day out.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-600/30 flex items-center justify-center">
                <Users className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Customer Focus</h3>
              <p className="text-white/70">
                Our customers are at the center of everything we do. Their success is our success.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-600/30 flex items-center justify-center">
                <Clock className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
              <p className="text-white/70">
                We continuously innovate to stay ahead of the curve and provide cutting-edge solutions.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Our Infrastructure</h2>
            <p className="text-white/80 mb-4">
              VestroCloud operates multiple data centers strategically located around the world to ensure optimal
              performance and redundancy. Our infrastructure is built on enterprise-grade hardware from leading
              manufacturers, featuring:
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
              <li>Latest generation Intel and AMD processors</li>
              <li>High-speed NVMe SSD storage in RAID configuration</li>
              <li>Redundant power supplies and cooling systems</li>
              <li>Multiple tier-1 network providers for optimal connectivity</li>
              <li>Advanced DDoS protection and security systems</li>
              <li>24/7 monitoring and automated failover systems</li>
            </ul>
            <p className="text-white/80">
              We continuously upgrade our infrastructure to incorporate the latest technologies, ensuring that our
              customers always have access to the best performance and reliability available.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
