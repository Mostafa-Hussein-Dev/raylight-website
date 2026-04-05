import { NextResponse } from "next/server";

export async function POST() {
  // Generate a mock Lightning invoice
  const rhash = Array.from({ length: 64 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join("");

  const paymentRequest =
    "lnbc50n1p0" +
    Array.from({ length: 200 }, () =>
      "abcdefghijklmnopqrstuvwxyz0123456789".charAt(
        Math.floor(Math.random() * 36)
      )
    ).join("");

  return NextResponse.json({ rhash, paymentRequest });
}
