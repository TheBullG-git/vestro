"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Use the same API endpoint as the email signup form
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please try again later.")
      }

      setSubmitStatus({
        success: true,
        message: "Thank you for your message. Our team will contact you shortly.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error ? error.message : "There was an error sending your message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg glass-input px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg glass-input px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-lg glass-input px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="How can we help you?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full rounded-lg glass-input px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Tell us how we can assist you..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-medium transition-colors flex items-center justify-center"
      >
        {isSubmitting ? (
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
            Sending...
          </span>
        ) : (
          <span className="flex items-center">
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </span>
        )}
      </button>

      {submitStatus && (
        <div
          className={`mt-4 p-3 rounded-md ${
            submitStatus.success
              ? "bg-green-500/20 text-green-100 border border-green-500/30"
              : "bg-red-500/20 text-red-100 border border-red-500/30"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </form>
  )
}
