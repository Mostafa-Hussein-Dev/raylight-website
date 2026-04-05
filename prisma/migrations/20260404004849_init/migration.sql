-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "wattage" INTEGER NOT NULL,
    "voltage" TEXT NOT NULL DEFAULT '110-240V',
    "dimmable" BOOLEAN NOT NULL DEFAULT false,
    "inStock" BOOLEAN NOT NULL DEFAULT true,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT NOT NULL,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE INDEX "Product_category_idx" ON "Product"("category");

-- CreateIndex
CREATE INDEX "Product_style_idx" ON "Product"("style");

-- CreateIndex
CREATE INDEX "Product_color_idx" ON "Product"("color");

-- CreateIndex
CREATE INDEX "Product_material_idx" ON "Product"("material");

-- CreateIndex
CREATE INDEX "Product_featured_idx" ON "Product"("featured");

-- CreateIndex
CREATE INDEX "Product_createdAt_idx" ON "Product"("createdAt");

-- CreateIndex
CREATE INDEX "Product_name_idx" ON "Product"("name");
