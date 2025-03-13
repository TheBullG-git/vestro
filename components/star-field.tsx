"use client"

import { useEffect, useRef } from "react"

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: Star[] = []
    const numberOfStars = 200

    class Star {
      x: number
      y: number
      size: number
      opacity: number
      pulse: number
      speed: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * 2 + 0.5
        this.opacity = Math.random() * 0.5 + 0.3
        this.pulse = Math.random() * 0.02 + 0.01
        this.speed = Math.random() * 0.05 + 0.01
      }

      update(canvasHeight: number) {
        this.opacity += Math.sin(Date.now() * this.pulse) * 0.01
        this.y += this.speed

        if (this.y > canvasHeight) {
          this.y = 0
          this.x = Math.random() * canvas!.width
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initStars = () => {
      for (let i = 0; i < numberOfStars; i++) {
        stars.push(new Star(canvas.width, canvas.height))
      }
    }

    initStars()

    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#1e3a8a") // blue-900
      gradient.addColorStop(0.5, "#1e40af") // blue-800
      gradient.addColorStop(1, "#1d4ed8") // blue-700

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw stars
      for (let i = 0; i < stars.length; i++) {
        stars[i].update(canvas.height)
        stars[i].draw(ctx)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
}

