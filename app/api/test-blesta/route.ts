import { NextResponse } from "next/server"

// This makes the route static for export
export const dynamic = "force-static"

// This is needed for static export
export const runtime = "edge"

export async function GET() {
  return NextResponse.json({
    message:
      "This is a static version of the API. For the full API functionality, please deploy to a serverless platform.",
  })
}
