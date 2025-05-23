"use client"

import { useEffect, useState } from "react"
import { Server, Globe, GamepadIcon, Headphones, Calculator, HardDrive, Network, Loader2 } from "lucide-react"
import { type ServicePackage, getServicePackages } from "@/lib/api-service"

export function ServicesGrid() {
  const [services, setServices] = useState<ServicePackage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await getServicePackages()
        setServices(data)
      } catch (error) {
        console.error("Error loading services:", error)
      } finally {
        setLoading(false)
      }
    }

    loadServices()
  }, [])

  // Map service categories to icons
  const getIconForService = (service: ServicePackage) => {
    const category = service.category.toLowerCase()

    if (service.name.toLowerCase().includes("minecraft") || service.name.toLowerCase().includes("game")) {
      return <GamepadIcon className="h-8 w-8 text-amber-300" />
    }

    if (service.name.toLowerCase().includes("teamspeak") || service.name.toLowerCase().includes("voice")) {
      return <Headphones className="h-8 w-8 text-amber-300" />
    }

    if (service.name.toLowerCase().includes("vps")) {
      return <Server className="h-8 w-8 text-amber-300" />
    }

    if (service.name.toLowerCase().includes("tally")) {
      return <Calculator className="h-8 w-8 text-amber-300" />
    }

    if (service.name.toLowerCase().includes("backup")) {
      return <HardDrive className="h-8 w-8 text-amber-300" />
    }

    if (service.name.toLowerCase().includes("colocation")) {
      return <Network className="h-8 w-8 text-amber-300" />
    }

    if (service.name.toLowerCase().includes("web") || service.name.toLowerCase().includes("domain")) {
      return <Globe className="h-8 w-8 text-amber-300" />
    }

    // Default icon based on category
    if (category.includes("game")) {
      return <GamepadIcon className="h-8 w-8 text-amber-300" />
    } else if (category.includes("vps")) {
      return <Server className="h-8 w-8 text-amber-300" />
    } else {
      return <Globe className="h-8 w-8 text-amber-300" />
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-10 w-10 text-amber-300 animate-spin" />
        <span className="ml-3 text-white">Loading services...</span>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Our <span className="text-amber-300">Services</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Discover our range of high-performance hosting solutions tailored to meet your specific needs.
          <span className="block mt-2 text-amber-300 font-medium">Pricing coming soon!</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open("https://billing.vestrocloud.com", "_blank")}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600/30 flex items-center justify-center">
              {getIconForService(service)}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{service.name}</h3>
            <p className="text-white/70 mb-4">{service.description}</p>
            {service.pricing ? (
              <div className="text-amber-300 font-semibold">
                {service.pricing.amount} {service.pricing.currency} / {service.pricing.period}
              </div>
            ) : (
              <div className="text-amber-300 font-semibold">Pricing Coming Soon</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
