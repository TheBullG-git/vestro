import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields" }, { status: 400 })
    }

    // Validate email format
    if (!email.includes("@")) {
      return NextResponse.json({ success: false, message: "Please enter a valid email address" }, { status: 400 })
    }

    // Log the contact form submission for debugging
    console.log("Contact form submission:", { name, email, subject, message })

    // Send the data to Google Sheets via Cloudflare Function
    try {
      // Use the same Cloudflare Function endpoint as the email signup form
      // but with a different action parameter
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to submit contact form")
      }
    } catch (apiError) {
      console.error("Error sending to contact form API:", apiError)
      // Continue even if API call fails
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Thank you for your message. Our team will contact you shortly.",
    })
  } catch (error) {
    console.error("Error processing contact form submission:", error)
    return NextResponse.json(
      { success: false, message: "Failed to process your request. Please try again later." },
      { status: 500 },
    )
  }
}
