"use client"

import { useRef, useEffect } from "react"

export function CartoonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars = Array.from({ length: 200 }, () => new Star(canvas.width, canvas.height))
    const numberOfClouds = 5
    const clouds: Cloud[] = []

    const init = () => {
      if (!canvas) return

      for (let i = 0; i < numberOfClouds; i++) {
        clouds.push(new Cloud(canvas.width, canvas.height))
      }
    }

    init()

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.draw(ctx)
        star.update()
      })

      clouds.forEach((cloud) => {
        cloud.draw(ctx)
        cloud.update(canvas.width)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
}

class Star {
  x: number
  y: number
  size: number
  opacity: number
  pulse: number
  flicker: number

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.size = Math.random() * 2 + 1
    this.opacity = Math.random() * 0.5 + 0.3
    this.pulse = Math.random() * 0.02 + 0.01
    this.flicker = Math.random() * 0.2 - 0.1
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
    ctx.fill()
  }

  update() {
    this.opacity += this.pulse + this.flicker
    if (this.opacity > 1 || this.opacity < 0) {
      this.pulse = -this.pulse
    }
  }
}

class Cloud {
  x: number
  y: number
  width: number
  height: number
  speed: number

  constructor(canvasWidth: number, canvasHeight: number) {
    this.width = Math.random() * 200 + 100
    this.height = this.width * 0.6
    this.x = Math.random() * (canvasWidth + 200) - 200
    this.y = Math.random() * canvasHeight * 0.7
    this.speed = Math.random() * 0.5 + 0.1
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  update(canvasWidth: number) {
    this.x += this.speed
    if (this.x > canvasWidth + this.width) {
      this.x = -this.width
    }
  }
}

