import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
  const limit = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") || "12")));
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const style = searchParams.get("style") || "";
  const color = searchParams.get("color") || "";
  const material = searchParams.get("material") || "";
  const dimmable = searchParams.get("dimmable");
  const featured = searchParams.get("featured");
  const sortBy = searchParams.get("sortBy") || "createdAt";
  const sortOrder = searchParams.get("sortOrder") === "asc" ? "asc" : "desc";

  const where: Prisma.ProductWhereInput = {
    inStock: true,
    ...(search && {
      OR: [
        { name: { contains: search, mode: "insensitive" as const } },
        { description: { contains: search, mode: "insensitive" as const } },
        { subtitle: { contains: search, mode: "insensitive" as const } },
      ],
    }),
    ...(category && { category: { equals: category, mode: "insensitive" as const } }),
    ...(style && { style: { equals: style, mode: "insensitive" as const } }),
    ...(color && { color: { equals: color, mode: "insensitive" as const } }),
    ...(material && { material: { equals: material, mode: "insensitive" as const } }),
    ...(dimmable !== null && dimmable !== undefined && dimmable !== "" && { dimmable: dimmable === "true" }),
    ...(featured !== null && featured !== undefined && featured !== "" && { featured: featured === "true" }),
  };

  const validSortFields = ["name", "createdAt", "wattage"];
  const orderField = validSortFields.includes(sortBy) ? sortBy : "createdAt";

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy: { [orderField]: sortOrder },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.product.count({ where }),
  ]);

  return NextResponse.json({
    products,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
}
