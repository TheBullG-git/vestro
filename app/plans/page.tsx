import { ServicesGridServer } from "@/components/services-grid-server"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">Our</span>{" "}
              Services
            </h1>
            <p className="text-xl text-white/80">
              We're starting with Game Server and VPS Hosting, Colocation services.
              <br />
              <span className="text-amber-300">Pricing will be available soon!</span>
            </p>
          </div>

          <ServicesGridServer />
        </div>
      </section>
    </div>
  )
}
