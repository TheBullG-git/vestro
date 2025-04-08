import { NextResponse } from "next/server"

// This makes the route static for export
export const dynamic = "force-static"

// Remove the runtime directive as it conflicts with force-static
// export const runtime = "edge"

export async function POST() {
  return NextResponse.json({
    success: true,
    message:
      "This is a static version of the API. For the full API functionality, please deploy to a serverless platform.",
  })
}
