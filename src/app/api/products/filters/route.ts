import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const [categories, styles, colors, materials] = await Promise.all([
    prisma.product.findMany({ distinct: ["category"], select: { category: true }, orderBy: { category: "asc" } }),
    prisma.product.findMany({ distinct: ["style"], select: { style: true }, orderBy: { style: "asc" } }),
    prisma.product.findMany({ distinct: ["color"], select: { color: true }, orderBy: { color: "asc" } }),
    prisma.product.findMany({ distinct: ["material"], select: { material: true }, orderBy: { material: "asc" } }),
  ]);

  return NextResponse.json({
    categories: categories.map((c) => c.category),
    styles: styles.map((s) => s.style),
    colors: colors.map((c) => c.color),
    materials: materials.map((m) => m.material),
  });
}
