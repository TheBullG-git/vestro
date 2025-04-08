// This is a Google Apps Script file that you'll need to deploy as a web app
// 1. Go to https://script.google.com/
// 2. Create a new project
// 3. Paste this code
// 4. Deploy as a web app (accessible to anyone, even anonymous)
// 5. Copy the web app URL and set it as GOOGLE_SCRIPT_URL in your Cloudflare environment variables

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents)
    const timestamp = data.timestamp || new Date().toISOString()

    // Open the spreadsheet by ID
    // Replace this with your actual Google Sheet ID
    const spreadsheetId = "YOUR_SPREADSHEET_ID"
    const ss = SpreadsheetApp.openById(spreadsheetId)

    // Check the type of submission
    if (data.type === "contact") {
      // This is a contact form submission
      const contactSheet = ss.getSheetByName("Contact Form") || ss.insertSheet("Contact Form")

      // If the sheet is new, add headers
      if (contactSheet.getLastRow() === 0) {
        contactSheet.appendRow(["Name", "Email", "Subject", "Message", "Timestamp"])
      }

      // Add the contact form data to the sheet
      contactSheet.appendRow([data.name, data.email, data.subject, data.message, timestamp])

      return ContentService.createTextOutput(
        JSON.stringify({
          success: true,
          message: "Contact form data added to spreadsheet",
        }),
      ).setMimeType(ContentService.MimeType.JSON)
    } else {
      // This is an email signup
      const emailSheet = ss.getSheetByName("Email Signups") || ss.getSheets()[0]

      // If the sheet is new, add headers
      if (emailSheet.getLastRow() === 0) {
        emailSheet.appendRow(["Email", "Timestamp"])
      }

      // Add the email to the sheet
      emailSheet.appendRow([data.email, timestamp])

      return ContentService.createTextOutput(
        JSON.stringify({
          success: true,
          message: "Email added to spreadsheet",
        }),
      ).setMimeType(ContentService.MimeType.JSON)
    }
  } catch (error) {
    // Log the error
    console.error("Error in doPost:", error)

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error processing request: " + error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      message: "This is a POST endpoint for adding data to a Google Sheet",
    }),
  ).setMimeType(ContentService.MimeType.JSON)
}
