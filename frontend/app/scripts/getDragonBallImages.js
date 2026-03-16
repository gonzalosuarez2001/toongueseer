import fs from "fs";
import path from "path";

const apiUrl = "https://dragonball-api.com/api/characters?limit=48";

async function main() {
  const res = await fetch(apiUrl);
  const data = await res.json();

  await Promise.all(
    data.items.map(async (character, index) => {
      const res = await fetch(character.image);

      const toonId = index + 1;

      if (!res.ok) throw new Error("Error al obtener la imagen");

      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const savePath = path.join(
        process.cwd(),
        "public/dragonball_toons",
        `${toonId}.webp`
      );

      fs.writeFileSync(savePath, buffer);
    })
  );
}

main().catch((error) => {
  console.error(
    "Error al obtener las imagenes de los personajes de los Dragon Ball: ",
    error
  );
  process.exit(1);
});
