import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

// Initialize the Google Sheets document
export async function getGoogleSheetsDocument() {
  try {
    // Create a JWT client using the service account credentials
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    // Initialize the Google Spreadsheet with the document ID
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID || "", serviceAccountAuth)

    // Load document properties and sheets
    await doc.loadInfo()

    return doc
  } catch (error) {
    console.error("Error initializing Google Sheets:", error)
    throw new Error("Failed to connect to Google Sheets")
  }
}

// Add a new subscriber to the Google Sheet
export async function addSubscriberToSheet(email: string) {
  try {
    const doc = await getGoogleSheetsDocument()

    // Assuming the first sheet is where we want to add subscribers
    const sheet = doc.sheetsByIndex[0]

    // Add a new row with the email and timestamp
    await sheet.addRow({
      email,
      timestamp: new Date().toISOString(),
    })

    return { success: true }
  } catch (error) {
    console.error("Error adding subscriber to Google Sheet:", error)
    throw new Error("Failed to add subscriber to Google Sheet")
  }
}

