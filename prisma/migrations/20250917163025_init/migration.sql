-- CreateTable
CREATE TABLE "public"."Cartoon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Cartoon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Toon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "cartoon_id" INTEGER NOT NULL,

    CONSTRAINT "Toon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Stats" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "cartoon_id" INTEGER NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Toon" ADD CONSTRAINT "Toon_cartoon_id_fkey" FOREIGN KEY ("cartoon_id") REFERENCES "public"."Cartoon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Stats" ADD CONSTRAINT "Stats_cartoon_id_fkey" FOREIGN KEY ("cartoon_id") REFERENCES "public"."Cartoon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
