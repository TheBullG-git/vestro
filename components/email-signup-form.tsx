"use client"

import { useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { useFormStatus } from "react-dom"
import { subscribeToWaitlist } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto h-12 text-base font-medium rounded-full group overflow-hidden relative bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 border border-amber-300/30 shadow-[0_0_15px_rgba(251,191,36,0.5)]"
    >
      {pending ? (
        <span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing
        </span>
      ) : (
        <span className="flex items-center">
          <Sparkles className="mr-2 h-4 w-4 text-amber-100" />
          Join the Elite
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      )}
    </Button>
  )
}

export function EmailSignupForm() {
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" | null }>({
    text: "",
    type: null,
  })

  async function clientAction(formData: FormData) {
    const result = await subscribeToWaitlist(formData)

    setMessage({
      text: result.message,
      type: result.success ? "success" : "error",
    })
  }

  return (
    <div className="w-full">
      <form
        action={clientAction}
        className="flex w-full flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 relative"
      >
        <div className="absolute -top-3 -left-3 text-2xl animate-bounce hidden sm:block">✨</div>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email for VIP access"
          className="flex-1 h-12 text-base bg-white/10 backdrop-blur-md border-white/20 focus:border-white/40 text-white placeholder:text-white/50"
          required
        />
        <SubmitButton />
      </form>

      {message.text && (
        <div
          className={`mt-3 text-sm p-2 rounded ${
            message.type === "success"
              ? "bg-green-500/20 text-green-100 border border-green-500/30"
              : "bg-red-500/20 text-red-100 border border-red-500/30"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  )
}

