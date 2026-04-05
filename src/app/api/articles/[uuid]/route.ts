import { NextResponse } from "next/server";
import { articles } from "@/lib/data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ uuid: string }> }
) {
  const { uuid } = await params;
  const article = articles.find((a) => a.uuid === uuid);

  if (!article) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(article);
}
