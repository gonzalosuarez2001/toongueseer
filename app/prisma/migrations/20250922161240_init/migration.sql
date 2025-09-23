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
    "guessed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Toon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Stats" (
    "cartoon_id" INTEGER NOT NULL,
    "daily_toon" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("cartoon_id")
);

-- AddForeignKey
ALTER TABLE "public"."Toon" ADD CONSTRAINT "Toon_cartoon_id_fkey" FOREIGN KEY ("cartoon_id") REFERENCES "public"."Cartoon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Stats" ADD CONSTRAINT "Stats_cartoon_id_fkey" FOREIGN KEY ("cartoon_id") REFERENCES "public"."Cartoon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
