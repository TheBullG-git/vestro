import { NextResponse } from "next/server"

// This makes the route static for export
export const dynamic = "force-static"

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Thank you for your message. Our team will contact you shortly.",
  })
}
