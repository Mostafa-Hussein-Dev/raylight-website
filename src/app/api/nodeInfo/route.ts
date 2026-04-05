import { NextResponse } from "next/server";
import { nodeInfo } from "@/lib/data";

export async function GET() {
  return NextResponse.json(nodeInfo);
}
