// A simplified email service that logs emails instead of using Google Sheets
// This avoids the dependency issues while still providing functionality

export async function saveEmail(email: string) {
  try {
    console.log(`[Email Service] Saving email: ${email}`)

    // In a production environment, you would save this to a database
    // For now, we'll just return a success response

    return {
      success: true,
      message: "Email saved successfully",
    }
  } catch (error) {
    console.error("Error saving email:", error)
    return {
      success: false,
      message: "Failed to save email",
    }
  }
}

