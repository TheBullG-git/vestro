"use server"

import { addSubscriberToSheet } from "@/lib/google-sheets"

export async function subscribeToWaitlist(formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    // Add the subscriber to Google Sheets
    await addSubscriberToSheet(email)

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

