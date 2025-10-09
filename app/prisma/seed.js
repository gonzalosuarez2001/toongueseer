import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";

const cartoonList = ["simpsons", "pokemon"];

const prisma = new PrismaClient();

const dataDir = path.join(process.cwd(), "data");
const toons = {};

const files = fs.readdirSync(dataDir);

files.forEach((file) => {
  if (file.endsWith(".json")) {
    const filePath = path.join(dataDir, file);
    const rawData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(rawData);

    const name = path.parse(file).name;
    toons[name] = jsonData;
  }
});

async function insertCartoons() {
  const cartoons = [];
  await Promise.all(
    cartoonList.map(async (cartoon) => {
      console.log(`Inserting cartoon: ${cartoon}`);
      const res = await prisma.cartoon.create({
        data: { name: cartoon },
      });
      cartoons.push(res);
    })
  );
  return cartoons;
}

async function insertStats(cartoons) {
  await Promise.all(
    cartoons.map(async (cartoon) => {
      await prisma.stats.create({
        data: {
          cartoon_id: cartoon.id,
        },
      });
    })
  );
}

async function insertToons(cartoons) {
  await Promise.all(
    cartoons.map(async (cartoon) => {
      await Promise.all(
        toons[cartoon.name].map(async (toon) => {
          await prisma.toon.create({
            data: { ...toon, cartoon_id: cartoon.id },
          });
        })
      );
    })
  );
}

async function main() {
  const cartoons = await insertCartoons();
  await insertStats(cartoons);
  await insertToons(cartoons);
}

main()
  .catch((error) => {
    console.error("Error al correr las seeds de Prisma: ", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
