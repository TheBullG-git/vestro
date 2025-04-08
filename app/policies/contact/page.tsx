"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export default function ContactUs() {
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
      // In a real implementation, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

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
        message: "There was an error sending your message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-amber-300">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <p className="text-white/80 mb-6">
            We'd love to hear from you. Please fill out the form below or use our contact information to get in touch
            with our team.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="text-amber-300 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Email Us</h3>
                <p className="text-white/80">support@vestrocloud.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-amber-300 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Call Us</h3>
                <p className="text-white/80">+1 (800) 123-4567</p>
                <p className="text-white/60 text-sm">Monday to Friday, 9 AM to 6 PM EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="text-amber-300 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Visit Us</h3>
                <p className="text-white/80">
                  VestroCloud Headquarters
                  <br />
                  Block No. B-1, Umiyaji Park, Kolki Road,
                  <br />
                  Opp. New Police Line, Upleta Lati Plot,
                  <br />
                  Upleta Police Station, Upleta, Gujarat
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <h2 className="text-xl font-semibold mb-4 text-white">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                Your Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
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
                className="w-full rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Tell us how we can assist you..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
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
            </Button>
          </form>

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
        </div>
      </div>
    </div>
  )
}
