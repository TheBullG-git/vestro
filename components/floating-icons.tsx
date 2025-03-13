"use client"

import { useEffect, useState } from "react"
import { Cloud, Database, Server, Shield, Zap } from "lucide-react"

export function FloatingIcons() {
  const [icons, setIcons] = useState<JSX.Element[]>([])

  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
      }
    `
    document.head.appendChild(style)

    const iconElements = [
      <div
        key="cloud-1"
        className="absolute top-20 left-10 text-white opacity-60"
        style={{ animation: "float 8s ease-in-out infinite" }}
      >
        <Cloud size={60} />
      </div>,
      <div
        key="server-1"
        className="absolute bottom-40 right-20 text-white opacity-60"
        style={{ animation: "float 10s ease-in-out infinite", animationDelay: "2s" }}
      >
        <Server size={50} />
      </div>,
      <div
        key="database-1"
        className="absolute top-1/2 left-10 text-white opacity-60"
        style={{ animation: "float 12s ease-in-out infinite", animationDelay: "1s" }}
      >
        <Database size={40} />
      </div>,
      <div
        key="shield-1"
        className="absolute top-40 right-10 text-amber-300 opacity-40"
        style={{ animation: "float 9s ease-in-out infinite", animationDelay: "1.5s" }}
      >
        <Shield size={50} />
      </div>,
      <div
        key="zap-1"
        className="absolute bottom-20 left-1/4 text-amber-300 opacity-40"
        style={{ animation: "float 11s ease-in-out infinite", animationDelay: "3s" }}
      >
        <Zap size={45} />
      </div>,
    ]

    setIcons(iconElements)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{icons}</div>
}

