"use server"

import { saveEmail } from "@/lib/email-service"

export async function subscribeToWaitlist(formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    // Save the email using our simplified service
    const result = await saveEmail(email)

    return {
      success: true,
      message: "Thank you for joining our exclusive waitlist! We'll be in touch soon.",
    }
  } catch (error) {
    console.error("Error in subscribeToWaitlist:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
