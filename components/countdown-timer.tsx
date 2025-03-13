"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  days?: number
}

export function CountdownTimer({ days = 30 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Get the target date from localStorage or create a new one
    let targetTimestamp: number

    if (typeof window !== "undefined") {
      const savedTarget = localStorage.getItem("countdownTarget")

      if (savedTarget) {
        // Use the saved target date
        targetTimestamp = Number.parseInt(savedTarget, 10)
      } else {
        // Calculate a new target date (30 days from now)
        const now = new Date()
        const futureDate = new Date(now)
        futureDate.setDate(now.getDate() + days)
        targetTimestamp = futureDate.getTime()

        // Save it to localStorage for future visits
        localStorage.setItem("countdownTarget", targetTimestamp.toString())
      }
    } else {
      // Fallback for SSR
      const now = new Date()
      const futureDate = new Date(now)
      futureDate.setDate(now.getDate() + days)
      targetTimestamp = futureDate.getTime()
    }

    // Initial calculation
    calculateTimeLeft(targetTimestamp)

    const interval = setInterval(() => {
      calculateTimeLeft(targetTimestamp)
    }, 1000)

    function calculateTimeLeft(targetTime: number) {
      const now = new Date().getTime()
      const difference = targetTime - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })

        // If countdown is finished, clear localStorage
        if (typeof window !== "undefined") {
          localStorage.removeItem("countdownTarget")
        }
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    return () => clearInterval(interval)
  }, [days]) // Only re-run if days prop changes

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="flex flex-col bg-white/10 backdrop-blur-md rounded-lg p-3 relative overflow-hidden group hover:bg-white/20 transition-all duration-300 border border-amber-300/30">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
        <div className="text-4xl font-bold text-amber-300 relative z-10">{timeLeft.days}</div>
        <div className="text-xs text-amber-100 relative z-10">Days</div>
      </div>
      <div className="flex flex-col bg-white/10 backdrop-blur-md rounded-lg p-3 relative overflow-hidden group hover:bg-white/20 transition-all duration-300 border border-amber-300/30">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
        <div className="text-4xl font-bold text-amber-300 relative z-10">{timeLeft.hours}</div>
        <div className="text-xs text-amber-100 relative z-10">Hours</div>
      </div>
      <div className="flex flex-col bg-white/10 backdrop-blur-md rounded-lg p-3 relative overflow-hidden group hover:bg-white/20 transition-all duration-300 border border-amber-300/30">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
        <div className="text-4xl font-bold text-amber-300 relative z-10">{timeLeft.minutes}</div>
        <div className="text-xs text-amber-100 relative z-10">Minutes</div>
      </div>
      <div className="flex flex-col bg-white/10 backdrop-blur-md rounded-lg p-3 relative overflow-hidden group hover:bg-white/20 transition-all duration-300 border border-amber-300/30">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
        <div className="text-4xl font-bold text-amber-300 relative z-10">{timeLeft.seconds}</div>
        <div className="text-xs text-amber-100 relative z-10">Seconds</div>
      </div>
    </div>
  )
}

