/**
 * Blesta API Integration
 * This file handles communication with the Blesta API to fetch plans and services
 */

export interface Plan {
  id: string
  name: string
  description: string
  price: {
    monthly: number
    quarterly?: number
    semiannually?: number
    annually?: number
  }
  features: string[]
  popular?: boolean
  category: string
  specs?: {
    cpu?: string
    ram?: string
    storage?: string
    bandwidth?: string
    [key: string]: string | undefined
  }
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
}

// This would normally fetch from the Blesta API
// For now, we'll use mock data that you can replace with actual API calls
export async function getServiceCategories(): Promise<Category[]> {
  // In a real implementation, you would fetch this from your Blesta API
  return [
    {
      id: "vps",
      name: "Virtual Private Servers",
      description: "High-performance VPS with dedicated resources",
      icon: "server",
    },
    {
      id: "game",
      name: "Game Servers",
      description: "Low-latency game servers for an optimal gaming experience",
      icon: "gamepad-2",
    },
    {
      id: "web",
      name: "Web Hosting",
      description: "Reliable web hosting for your websites and applications",
      icon: "globe",
    },
    {
      id: "dedicated",
      name: "Dedicated Servers",
      description: "Powerful dedicated servers with full root access",
      icon: "server",
    },
  ]
}

export async function getPlans(categoryId?: string): Promise<Plan[]> {
  // In a real implementation, you would fetch this from your Blesta API
  const allPlans = [
    // VPS Plans
    {
      id: "vps-starter",
      name: "VPS Starter",
      description: "Perfect for small projects and websites",
      price: {
        monthly: 9.99,
        annually: 99.99,
      },
      features: ["1 vCPU Core", "2 GB RAM", "20 GB SSD Storage", "1 TB Bandwidth", "1 IPv4 Address", "24/7 Support"],
      category: "vps",
      specs: {
        cpu: "1 vCPU",
        ram: "2 GB",
        storage: "20 GB SSD",
        bandwidth: "1 TB",
      },
    },
    {
      id: "vps-business",
      name: "VPS Business",
      description: "Ideal for growing businesses and applications",
      price: {
        monthly: 19.99,
        annually: 199.99,
      },
      features: [
        "2 vCPU Cores",
        "4 GB RAM",
        "50 GB SSD Storage",
        "2 TB Bandwidth",
        "1 IPv4 Address",
        "24/7 Priority Support",
      ],
      popular: true,
      category: "vps",
      specs: {
        cpu: "2 vCPU",
        ram: "4 GB",
        storage: "50 GB SSD",
        bandwidth: "2 TB",
      },
    },
    {
      id: "vps-premium",
      name: "VPS Premium",
      description: "For demanding applications and high traffic",
      price: {
        monthly: 39.99,
        annually: 399.99,
      },
      features: [
        "4 vCPU Cores",
        "8 GB RAM",
        "100 GB SSD Storage",
        "5 TB Bandwidth",
        "1 IPv4 Address",
        "24/7 Priority Support",
        "Daily Backups",
      ],
      category: "vps",
      specs: {
        cpu: "4 vCPU",
        ram: "8 GB",
        storage: "100 GB SSD",
        bandwidth: "5 TB",
      },
    },

    // Game Server Plans
    {
      id: "game-basic",
      name: "Game Server Basic",
      description: "Perfect for small gaming communities",
      price: {
        monthly: 14.99,
        quarterly: 39.99,
        annually: 149.99,
      },
      features: [
        "Up to 10 players",
        "2 GB RAM",
        "Standard CPU Priority",
        "50 GB SSD Storage",
        "Anti-DDoS Protection",
        "One-Click Game Installation",
      ],
      category: "game",
      specs: {
        players: "Up to 10",
        ram: "2 GB",
        cpu: "Standard Priority",
        storage: "50 GB SSD",
      },
    },
    {
      id: "game-pro",
      name: "Game Server Pro",
      description: "For serious gaming communities",
      price: {
        monthly: 24.99,
        quarterly: 69.99,
        annually: 249.99,
      },
      features: [
        "Up to 30 players",
        "4 GB RAM",
        "High CPU Priority",
        "100 GB SSD Storage",
        "Advanced Anti-DDoS Protection",
        "One-Click Game Installation",
        "Custom Mods Support",
      ],
      popular: true,
      category: "game",
      specs: {
        players: "Up to 30",
        ram: "4 GB",
        cpu: "High Priority",
        storage: "100 GB SSD",
      },
    },
    {
      id: "game-elite",
      name: "Game Server Elite",
      description: "For large gaming communities and tournaments",
      price: {
        monthly: 49.99,
        quarterly: 139.99,
        annually: 499.99,
      },
      features: [
        "Up to 100 players",
        "8 GB RAM",
        "Maximum CPU Priority",
        "200 GB SSD Storage",
        "Premium Anti-DDoS Protection",
        "One-Click Game Installation",
        "Custom Mods Support",
        "Dedicated Game Expert Support",
      ],
      category: "game",
      specs: {
        players: "Up to 100",
        ram: "8 GB",
        cpu: "Maximum Priority",
        storage: "200 GB SSD",
      },
    },

    // Web Hosting Plans
    {
      id: "web-starter",
      name: "Web Starter",
      description: "Perfect for personal websites and blogs",
      price: {
        monthly: 4.99,
        annually: 49.99,
      },
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "5 Email Accounts",
        "24/7 Support",
      ],
      category: "web",
      specs: {
        websites: "1",
        storage: "10 GB SSD",
        bandwidth: "Unmetered",
        email: "5 Accounts",
      },
    },
    {
      id: "web-business",
      name: "Web Business",
      description: "Ideal for small businesses and professionals",
      price: {
        monthly: 9.99,
        annually: 99.99,
      },
      features: [
        "Unlimited Websites",
        "50 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Unlimited Email Accounts",
        "24/7 Priority Support",
      ],
      popular: true,
      category: "web",
      specs: {
        websites: "Unlimited",
        storage: "50 GB SSD",
        bandwidth: "Unmetered",
        email: "Unlimited",
      },
    },
    {
      id: "web-premium",
      name: "Web Premium",
      description: "For high-traffic websites and applications",
      price: {
        monthly: 19.99,
        annually: 199.99,
      },
      features: [
        "Unlimited Websites",
        "100 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Unlimited Email Accounts",
        "24/7 Priority Support",
        "Daily Backups",
        "Advanced Security Features",
      ],
      category: "web",
      specs: {
        websites: "Unlimited",
        storage: "100 GB SSD",
        bandwidth: "Unmetered",
        email: "Unlimited",
      },
    },

    // Dedicated Server Plans
    {
      id: "dedicated-starter",
      name: "Dedicated Starter",
      description: "Entry-level dedicated server with full control",
      price: {
        monthly: 99.99,
        annually: 999.99,
      },
      features: [
        "Intel Xeon E3-1230v6",
        "16 GB DDR4 RAM",
        "2 x 1 TB SSD",
        "10 TB Bandwidth",
        "5 IPv4 Addresses",
        "Full Root Access",
        "24/7 Support",
      ],
      category: "dedicated",
      specs: {
        cpu: "Intel Xeon E3-1230v6",
        ram: "16 GB DDR4",
        storage: "2 x 1 TB SSD",
        bandwidth: "10 TB",
      },
    },
    {
      id: "dedicated-business",
      name: "Dedicated Business",
      description: "Powerful server for businesses and applications",
      price: {
        monthly: 199.99,
        annually: 1999.99,
      },
      features: [
        "Intel Xeon E5-2670",
        "32 GB DDR4 RAM",
        "2 x 2 TB SSD",
        "20 TB Bandwidth",
        "10 IPv4 Addresses",
        "Full Root Access",
        "24/7 Priority Support",
        "Hardware Monitoring",
      ],
      popular: true,
      category: "dedicated",
      specs: {
        cpu: "Intel Xeon E5-2670",
        ram: "32 GB DDR4",
        storage: "2 x 2 TB SSD",
        bandwidth: "20 TB",
      },
    },
    {
      id: "dedicated-premium",
      name: "Dedicated Premium",
      description: "High-performance server for demanding workloads",
      price: {
        monthly: 299.99,
        annually: 2999.99,
      },
      features: [
        "Intel Xeon E5-2690v4",
        "64 GB DDR4 RAM",
        "4 x 2 TB SSD",
        "30 TB Bandwidth",
        "15 IPv4 Addresses",
        "Full Root Access",
        "24/7 Priority Support",
        "Hardware Monitoring",
        "DDoS Protection",
      ],
      category: "dedicated",
      specs: {
        cpu: "Intel Xeon E5-2690v4",
        ram: "64 GB DDR4",
        storage: "4 x 2 TB SSD",
        bandwidth: "30 TB",
      },
    },
  ]

  // Filter by category if provided
  if (categoryId) {
    return allPlans.filter((plan) => plan.category === categoryId)
  }

  return allPlans
}

// Function to redirect to Blesta for purchasing
export function redirectToBlesta(planId: string): void {
  // In a real implementation, you would construct the proper URL with any necessary parameters
  window.location.href = `https://billing.vestrocloud.com/order/config/${planId}`
}

// This would be used in a real implementation to fetch actual data from Blesta
async function fetchFromBlesta(endpoint: string, params?: Record<string, string>) {
  // Replace with your actual Blesta API endpoint and authentication
  const apiUrl = process.env.BLESTA_API_URL
  const apiKey = process.env.BLESTA_API_KEY

  if (!apiUrl || !apiKey) {
    throw new Error("Blesta API configuration is missing")
  }

  const queryParams = params ? new URLSearchParams(params).toString() : ""
  const url = `${apiUrl}/${endpoint}${queryParams ? `?${queryParams}` : ""}`

  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error(`Blesta API error: ${response.statusText}`)
  }

  return response.json()
}
