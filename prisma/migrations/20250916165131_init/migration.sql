-- CreateTable
CREATE TABLE "public"."Toon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Toon_pkey" PRIMARY KEY ("id")
);
