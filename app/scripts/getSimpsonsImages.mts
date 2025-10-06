import fs from "fs";
import path from "path";

const apiUrl = "https://thesimpsonsapi.com/api/characters?page=";
const apiImageUrl = "https://cdn.thesimpsonsapi.com/200";

async function main() {
  const rounds = [1, 2, 3];

  await Promise.all(
    rounds.map(async (round) => {
      const res = await fetch(apiUrl + round);
      const data = await res.json();

      await Promise.all(
        data.results.map(
          async (toon: { id: number; name: string; portrait_path: string }) => {
            const imageUrl = apiImageUrl + toon.portrait_path;
            const res = await fetch(imageUrl);

            if (!res.ok) throw new Error("Error al obtener la imagen");

            const arrayBuffer = await res.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const savePath = path.join(
              process.cwd(),
              "public/simpsons_toons",
              `${toon.id}.webp`
            );

            fs.writeFileSync(savePath, buffer);
          }
        )
      );
    })
  );
}

main().catch((error) => {
  console.error(
    "Error al obtener las imagenes de los personajes de los Simpsons: ",
    error
  );
  process.exit(1);
});
