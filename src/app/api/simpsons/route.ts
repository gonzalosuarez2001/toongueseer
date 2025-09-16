import { NextResponse } from "next/server";
import { prisma } from "../../../lib/db";

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
        toons.map(async (toon: { name: string; portrait_path: string }) => {
          await prisma.toon.create({
            data: {
              name: toon.name,
              image_url:
                "https://cdn.thesimpsonsapi.com/200" + toon.portrait_path,
            },
          });
        })
      );
    })
  );

  return NextResponse.json({ msg: "Success" });
}
