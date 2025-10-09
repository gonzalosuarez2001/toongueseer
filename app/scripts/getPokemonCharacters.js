import fs from "fs";
import path from "path";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=386";

async function main() {
  const toons = [];

  const res = await fetch(apiUrl);
  const data = await res.json();

  await Promise.all(
    data.results.map(async (pokemon, index) => {
      const toonId = index + 1;
      toons.push({
       // id: toonId,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        image_url: `/${toonId}.webp`,
      });
    })
  );

  const jsonContent = JSON.stringify(toons, null, 2);

  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let fileName = "pokemon.json";
  let filePath = path.join(dir, fileName);
  let counter = 1;

  while (fs.existsSync(filePath)) {
    fileName = `pokemon_${counter}.json`;
    filePath = path.join(dir, fileName);
    counter++;
  }

  fs.writeFileSync(filePath, jsonContent);

  console.log("Archivo creado en", filePath);
}

main().catch((error) => {
  console.error("Error al obtener los personajes de Pokemon: ", error);
  process.exit(1);
});
