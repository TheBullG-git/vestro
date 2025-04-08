import type { ServicePackage } from "@/lib/api-service"

/**
 * Fallback service data that will always work
 */
export function getFallbackServices(): ServicePackage[] {
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
