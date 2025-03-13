"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Cloud, Database, Server } from "lucide-react"

export function CartoonElements() {
  const [elements, setElements] = useState<React.ReactNode[]>([])

  useEffect(() => {
    // Create cartoon elements that are positioned strategically, not randomly flying
    const items = []

    // Add cloud in top left
    items.push(
      <div
        key="cloud-1"
        className="absolute top-20 left-10 text-white opacity-60 transform animate-float"
        style={{ animation: "float 8s ease-in-out infinite" }}
      >
        <Cloud size={60} />
      </div>,
    )

    // Add server in bottom right
    items.push(
      <div
        key="server-1"
        className="absolute bottom-40 right-20 text-white opacity-60 transform animate-float-delayed"
        style={{ animation: "float 10s ease-in-out infinite", animationDelay: "2s" }}
      >
        <Server size={50} />
      </div>,
    )

    // Add database in middle left
    items.push(
      <div
        key="database-1"
        className="absolute top-1/2 left-10 text-white opacity-60 transform animate-float"
        style={{ animation: "float 12s ease-in-out infinite", animationDelay: "1s" }}
      >
        <Database size={40} />
      </div>,
    )

    // Add cartoon server rack image
    items.push(
      <div
        key="server-rack"
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-20 hidden lg:block animate-float-delayed"
        style={{ animation: "float 15s ease-in-out infinite", animationDelay: "3s" }}
      >
        <Image
          src="/placeholder.svg?height=200&width=200"
          width={200}
          height={200}
          alt="Cartoon server rack"
          className="object-contain"
        />
      </div>,
    )

    // Add cartoon cloud computing image
    items.push(
      <div
        key="cloud-computing"
        className="absolute top-40 right-10 opacity-20 hidden lg:block animate-float"
        style={{ animation: "float 9s ease-in-out infinite", animationDelay: "1.5s" }}
      >
        <Image
          src="/placeholder.svg?height=150&width=150"
          width={150}
          height={150}
          alt="Cartoon cloud computing"
          className="object-contain"
        />
      </div>,
    )

    setElements(items)

    // Add the animation to the stylesheet
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{elements}</div>
}

