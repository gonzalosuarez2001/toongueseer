import fs from "fs";
import path from "path";

const apiUrl = "https://thesimpsonsapi.com/api/characters?page=";

async function main() {
  const rounds = [1, 2, 3];

  const toons = [];

  await Promise.all(
    rounds.map(async (round) => {
      const res = await fetch(apiUrl + round);
      const data = await res.json();

      await Promise.all(
        data.results.map(async (toon) => {
          toons.push({
            name: toon.name,
            image_url: `/${toon.id}.webp`,
          });
        })
      );
    })
  );

  const jsonContent = JSON.stringify(toons, null, 2);

  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let fileName = "simpsons.json";
  let filePath = path.join(dir, fileName);
  let counter = 1;

  while (fs.existsSync(filePath)) {
    fileName = `simpsons_${counter}.json`;
    filePath = path.join(dir, fileName);
    counter++;
  }

  fs.writeFileSync(filePath, jsonContent);

  console.log("Archivo creado en", filePath);
}

main().catch((error) => {
  console.error("Error al obtener los personajes de los Simpsons: ", error);
  process.exit(1);
});
