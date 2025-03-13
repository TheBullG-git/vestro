"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

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

