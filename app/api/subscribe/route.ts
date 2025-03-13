import { NextResponse } from "next/server"
import { saveEmail } from "@/lib/email-service"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Invalid email address" }, { status: 400 })
    }

    // Save the email
    await saveEmail(email)

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Thank you for joining our exclusive waitlist! We'll be in touch soon.",
    })
  } catch (error) {
    console.error("Error processing subscription:", error)
    return NextResponse.json(
      { success: false, message: "Failed to process your request. Please try again later." },
      { status: 500 },
    )
  }
}

