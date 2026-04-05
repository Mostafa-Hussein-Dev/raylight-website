import { NextResponse } from "next/server";
import { articles } from "@/lib/data";

export async function GET() {
  // Return articles without full content (teasers only), matching original behavior
  const teasers = articles.map(({ uuid, title, teaser }) => ({
    uuid,
    title,
    teaser,
  }));
  return NextResponse.json(teasers);
}
