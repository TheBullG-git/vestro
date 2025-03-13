import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

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
    const clientEmail = context.env.GOOGLE_CLIENT_EMAIL
    const privateKey = context.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
    const sheetId = context.env.GOOGLE_SHEET_ID

    if (!clientEmail || !privateKey || !sheetId) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Server configuration error",
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

    // Create a JWT client using the service account credentials
    const serviceAccountAuth = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    // Initialize the Google Spreadsheet with the document ID
    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth)

    // Load document properties and sheets
    await doc.loadInfo()

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0]

    // Add a new row with the email and timestamp
    await sheet.addRow({
      email,
      timestamp: new Date().toISOString(),
    })

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

