import fs from "fs";
import path from "path";
import sharp from "sharp";

const apiImageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

async function main() {
  const rounds = 386;

  await Promise.all(
    Array.from({ length: rounds }, async (_, i) => {
      const toonId = i + 1;
      const imageUrl = `${apiImageUrl}/${toonId}.png`;

      try {
        const res = await fetch(imageUrl);
        if (!res.ok) throw new Error(`Error al obtener la imagen ${toonId}`);

        const arrayBuffer = await res.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const savePath = path.join(
          process.cwd(),
          "public/pokemon_toons",
          `${toonId}.webp`
        );

        const webpBuffer = await sharp(buffer)
          .webp({
            quality: 80, // ajustá entre 50 y 100 según lo que necesites
            effort: 4, // nivel de compresión (1–6), más alto = más lento pero más pequeño
          })
          .toBuffer();

        fs.writeFileSync(savePath, webpBuffer);

        console.log(`✅ Guardado: ${toonId}.webp`);
      } catch (error) {
        console.error(`❌ Error con imagen ${i + 1}:`, error.message);
      }
    })
  );
}

main().catch((error) => {
  console.error("Error general:", error);
  process.exit(1);
});
