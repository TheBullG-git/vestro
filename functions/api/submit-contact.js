export async function onRequest(context) {
  // Handle CORS preflight requests
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    })
  }

  // Only allow POST requests
  if (context.request.method !== "POST") {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Method not allowed",
      }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    )
  }

  try {
    // Parse the request body
    const body = await context.request.json()
    const { name, email, subject, message, timestamp } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing required fields",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        },
      )
    }

    // Log the submission for debugging
    console.log("Contact form submission:", { name, email, subject, message })

    // Send the data to Google Sheets via Google Apps Script
    try {
      const GOOGLE_SCRIPT_URL = context.env.GOOGLE_SCRIPT_URL || ""

      if (GOOGLE_SCRIPT_URL) {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "contact",
            name,
            email,
            subject,
            message,
            timestamp: timestamp || new Date().toISOString(),
          }),
        })

        const result = await response.json()
        console.log("Google Apps Script response:", result)
      } else {
        console.warn("GOOGLE_SCRIPT_URL environment variable not set")
      }
    } catch (apiError) {
      console.error("Error sending to Google Apps Script:", apiError)
      // Continue even if API call fails
    }

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message. Our team will contact you shortly.",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    )
  } catch (error) {
    console.error("Error processing contact form submission:", error)

    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to process your request. Please try again later.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    )
  }
}
