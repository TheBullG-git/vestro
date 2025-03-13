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
  
      // In a real implementation, you would store the email in a database or send it to a service
      // For now, we'll just log it and return success
      console.log("Email submitted:", email)
  
      // You could add code here to store the email in a database or send it to a service
      // For example, using Cloudflare D1, KV, or a third-party service
  
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
  
      