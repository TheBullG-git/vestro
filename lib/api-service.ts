/**
 * Service for interacting with the Blesta API
 */

export interface ServicePackage {
  id: string
  name: string
  description: string
  category: string
  pricing?: {
    amount: string
    currency: string
    period: string
  }
  features?: string[]
}

/**
 * Fetches all service packages from the Blesta API
 */
export async function getServicePackages(): Promise<ServicePackage[]> {
  try {
    const API_URL = process.env.BLESTA_API_URL
    const API_KEY = process.env.BLESTA_API_KEY

    if (!API_URL || !API_KEY) {
      console.error("API URL or API Key not configured")
      return getFallbackServices()
    }

    // Log the API URL for debugging
    console.log("Attempting to fetch from API:", API_URL)

    try {
      // Try to fetch from the API
      const response = await fetch(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      })

      if (!response.ok) {
        console.error("API error:", response.status, response.statusText)
        // If we get an error, use fallback data
        return getFallbackServices()
      }

      const data = await response.json()

      // Check if the response has the expected structure
      if (data && Array.isArray(data.packages)) {
        return data.packages
      } else if (data && Array.isArray(data)) {
        // Maybe the API returns an array directly
        return data
      } else {
        console.error("Unexpected API response structure:", data)
        return getFallbackServices()
      }
    } catch (fetchError) {
      console.error("Error fetching from API:", fetchError)
      return getFallbackServices()
    }
  } catch (error) {
    console.error("Failed to fetch service packages:", error)
    return getFallbackServices()
  }
}

/**
 * Fallback service data in case the API is unavailable
 */
function getFallbackServices(): ServicePackage[] {
  console.log("Using fallback service data")
  return [
    {
      id: "minecraft",
      name: "Minecraft",
      description: "High-performance Minecraft servers with low latency and DDoS protection.",
      category: "game",
    },
    {
      id: "csgo",
      name: "CS:GO",
      description: "Counter-Strike: Global Offensive servers optimized for competitive gameplay.",
      category: "game",
    },
    {
      id: "fivem",
      name: "FivM",
      description: "Custom GTA V multiplayer servers with advanced configuration options.",
      category: "game",
    },
    {
      id: "teamspeak",
      name: "TeamSpeak",
      description: "Low-latency voice communication servers for gaming communities.",
      category: "game",
    },
    {
      id: "vps",
      name: "VPS",
      description: "Virtual Private Servers with dedicated resources and full root access.",
      category: "vps",
    },
    {
      id: "tally",
      name: "Tally",
      description: "Specialized VPS optimized for Tally accounting software.",
      category: "vps",
    },
    {
      id: "backup",
      name: "BackUp",
      description: "Secure and reliable backup solutions for your critical data.",
      category: "vps",
    },
    {
      id: "colocation",
      name: "Colocation",
      description: "Secure facility to house your servers with power, cooling, and connectivity.",
      category: "hosting",
    },
    {
      id: "webhosting",
      name: "Web Hosting",
      description: "Reliable web hosting for websites and applications.",
      category: "hosting",
    },
    {
      id: "domain",
      name: "Domain",
      description: "Domain registration and management services.",
      category: "hosting",
    },
  ]
}
