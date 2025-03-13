import { NextResponse } from "next/server"
import { google } from "googleapis"

// This function authenticates with Google using a service account
async function getGoogleSheetsClient() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })
    return sheets
  } catch (error) {
    console.error("Error authenticating with Google:", error)
    throw new Error("Failed to authenticate with Google")
  }
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Invalid email address" }, { status: 400 })
    }

    // Get the Google Sheets client
    const sheets = await getGoogleSheetsClient()

    // Add the email to the Google Sheet
    // Replace with your actual spreadsheet ID and range
    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const range = "Sheet1!A:B" // Adjust based on your sheet structure

    // Get current timestamp
    const timestamp = new Date().toISOString()

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, timestamp]],
      },
    })

    return NextResponse.json({
      success: true,
      message: "Thank you for joining our exclusive waitlist!",
    })
  } catch (error) {
    console.error("Error adding email to spreadsheet:", error)
    return NextResponse.json(
      { success: false, message: "Failed to register your email. Please try again." },
      { status: 500 },
    )
  }
}

