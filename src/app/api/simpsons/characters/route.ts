import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";
import fs from "fs";
import path from "path";

export async function GET() {
  const charactes = await prisma.toon.findMany();
  return NextResponse.json(charactes);
}

export async function POST() {
  const rounds = [1, 2, 3];

  await Promise.all(
    rounds.map(async (round) => {
      const res = await fetch(
        `https://thesimpsonsapi.com/api/characters?page=${round}`
      );
      const data = await res.json();
      const toons = data.results;

      await Promise.all(
        toons.map(
          async (toon: { id: number; name: string; portrait_path: string }) => {
            const imageUrl =
              "https://cdn.thesimpsonsapi.com/200" + toon.portrait_path;
            const res = await fetch(imageUrl);

            if (!res.ok) throw new Error("Error al descargar la imagen");

            const arrayBuffer = await res.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const savePath = path.join(
              process.cwd(),
              "public/simpsons_characters",
              `${toon.id}.webp`
            );

            fs.writeFileSync(savePath, buffer);

            await prisma.toon.create({
              data: {
                id: toon.id,
                name: toon.name,
                image_url: `/${toon.id}.webp`,
              },
            });
          }
        )
      );
    })
  );

  return NextResponse.json({ msg: "Success" });
}

