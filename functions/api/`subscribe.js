// Cloudflare Function to handle email submissions and save to Google Sheets

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
            message: "Server configuration error. Please try again later.",
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
        throw new Error("Failed to save email to Google Sheets")
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
  
    const jwtHeader = {
      alg: "RS256",
      typ: "JWT",
    }
  
    const jwtClaimSet = {
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      exp: exp,
      iat: now,
    }
  
    // Base64 encode the header and claim set
    const encodedHeader = btoa(JSON.stringify(jwtHeader)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
    const encodedClaimSet = btoa(JSON.stringify(jwtClaimSet)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
  
    // Create the JWT signature using the private key
    const signatureInput = `${encodedHeader}.${encodedClaimSet}`
  
    // Note: In Cloudflare Workers, you'd need to use the SubtleCrypto API for signing
    // This is a simplified example - in production, you'd use proper JWT libraries
  
    // For this example, we'll use a placeholder for the signature
    // In a real implementation, you would sign the JWT properly
    const signature = await signJWT(signatureInput, privateKey)
  
    // Create the complete JWT
    const jwt = `${encodedHeader}.${encodedClaimSet}.${signature}`
  
    // Exchange the JWT for an access token
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
    })
  
    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text()
      console.error("Google OAuth error:", errorData)
      throw new Error("Failed to get Google auth token")
    }
  
    const tokenData = await tokenResponse.json()
    return tokenData.access_token
  }
  
  // Function to sign JWT (placeholder - would need proper implementation)
  async function signJWT(input, privateKey) {
    // In a real implementation, you would use proper JWT signing
    // This is a placeholder for demonstration purposes
  
    // For Cloudflare Workers, you might use:
    // const encoder = new TextEncoder();
    // const data = encoder.encode(input);
    // const key = await crypto.subtle.importKey(...);
    // const signature = await crypto.subtle.sign(...);
  
    // For this example, we'll return a placeholder
    return "signature_placeholder"
  }
  
  