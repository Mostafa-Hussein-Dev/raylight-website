import { NextResponse } from "next/server";

let sessionKey: string | null = null;

export async function GET() {
  if (sessionKey) {
    return NextResponse.json({ status: "LOGGED_IN", key: sessionKey });
  }
  return NextResponse.json({ status: "ANONYMOUS" });
}

export async function POST(request: Request) {
  const body = await request.json();
  const key = body.key as string;

  if (key && key.trim().length > 0) {
    sessionKey = key;
    return NextResponse.json({ status: "LOGGED_IN", key });
  }

  return NextResponse.json({ status: "ANONYMOUS" });
}
