import { NextResponse } from "next/server"

export async function GET() {
  try {
    const API_URL = process.env.BLESTA_API_URL
    const API_KEY = process.env.BLESTA_API_KEY

    if (!API_URL || !API_KEY) {
      return NextResponse.json({ error: "API URL or API Key not configured" }, { status: 500 })
    }

    // Try the base URL first
    console.log("Testing API connection to:", API_URL)

    const response = await fetch(`${API_URL}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        {
          error: `API error: ${response.status} ${response.statusText}`,
          url: API_URL,
          message: "The API returned an error. Please check the API URL and credentials.",
        },
        { status: response.status },
      )
    }

    let data
    try {
      data = await response.json()
    } catch (parseError) {
      return NextResponse.json(
        {
          error: "Failed to parse API response as JSON",
          responseText: await response.text(),
          url: API_URL,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      data,
      message: "Successfully connected to the API",
      url: API_URL,
    })
  } catch (error) {
    console.error("API test failed:", error)
    return NextResponse.json(
      {
        error: "Failed to connect to Blesta API",
        details: error instanceof Error ? error.message : String(error),
        message: "There was an error connecting to the API. Please check your network and API configuration.",
      },
      { status: 500 },
    )
  }
}
