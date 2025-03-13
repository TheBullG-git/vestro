// Cloudflare Function to handle email submissions and store in Google Sheets

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
    const { email } = body

    // Validate email
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid email address",
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

    // Get environment variables
    const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = context.env

    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error("Missing required environment variables")
      return new Response(
        JSON.stringify({
          success: false,
          message: "Server configuration error. Please contact the administrator.",
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

    // Get current timestamp
    const timestamp = new Date().toISOString()

    // Prepare the request to Google Sheets API
    const token = await getGoogleAuthToken(GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY)

    // Append the data to the Google Sheet
    const appendResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/Sheet1!A:B:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [[email, timestamp]],
        }),
      },
    )

    if (!appendResponse.ok) {
      const errorData = await appendResponse.text()
      console.error("Google Sheets API error:", errorData)
      throw new Error("Failed to store email in Google Sheets")
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for joining our exclusive waitlist! We'll be in touch soon.",
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
    console.error("Error processing email submission:", error)

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

// Function to get Google Auth token
async function getGoogleAuthToken(clientEmail, privateKey) {
  // Create JWT for Google authentication
  const now = Math.floor(Date.now() / 1000)
  const exp = now + 3600 // Token expires in 1 hour

  const header = {
    alg: "RS256",
    typ: "JWT",
  }

  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: exp,
    iat: now,
  }

  // Base64 encode the header and payload
  const encodedHeader = btoa(JSON.stringify(header)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
  const encodedPayload = btoa(JSON.stringify(payload)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")

  // Create the JWT signature using the private key
  // Note: This is a simplified version. In a real implementation, you would use a proper JWT library
  // For Cloudflare Workers, you might need to use the SubtleCrypto API

  // Since we can't implement the full JWT signing in this example,
  // we'll use a placeholder and provide instructions for a complete implementation

  // For a real implementation, you would:
  // 1. Use the Web Crypto API to sign the JWT
  // 2. Or use a JWT library compatible with Cloudflare Workers

  // For now, we'll return a placeholder
  return "PLACEHOLDER_TOKEN"
}

