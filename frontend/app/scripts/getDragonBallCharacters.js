import fs from "fs";
import path from "path";

const apiUrl = "https://dragonball-api.com/api/characters?limit=48";

async function main() {
  const toons = [];

  const res = await fetch(apiUrl);
  const data = await res.json();

  await Promise.all(
    data.items.map(async (character, index) => {
      const toonId = index + 1;
      toons.push({
        name: character.name,
        image_url: `/${toonId}.webp`,
      });
    })
  );

  const jsonContent = JSON.stringify(toons, null, 2);

  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let fileName = "dragonball.json";
  let filePath = path.join(dir, fileName);
  let counter = 1;

  while (fs.existsSync(filePath)) {
    fileName = `dragonball_${counter}.json`;
    filePath = path.join(dir, fileName);
    counter++;
  }

  fs.writeFileSync(filePath, jsonContent);

  console.log("Archivo creado en", filePath);
}

main().catch((error) => {
  console.error("Error al obtener los personajes de Dragon Ball: ", error);
  process.exit(1);
});
