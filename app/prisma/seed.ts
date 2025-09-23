const { PrismaClient } = require("@prisma/client");
const path = require("path");
const fs = require("fs");

type Toon = {
  id: number;
  name: string;
  image_url: string;
};

const prisma = new PrismaClient();

const filePath = path.join(process.cwd(), "./data/simpsons.json");
const rawData = fs.readFileSync(filePath, "utf-8");
const simpsonsData: Toon[] = JSON.parse(rawData);

const cartoons = [
  { id: 1, name: "Simpsons" },
  //{ id: 2, name: "Looney" },
];

const toons: Record<string, Toon[]> = {
  Simpsons: simpsonsData,
  Looney: [],
};

async function insertCartoons() {
  await Promise.all(
    cartoons.map(async (cartoon) => {
      await prisma.cartoon.create({
        data: cartoon,
      });
    })
  );
}

async function insertStats() {
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

async function insertToons() {
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
  await insertCartoons();
  await insertStats();
  await insertToons();
}

main()
  .catch((error) => {
    console.error("Error al correr las seeds de Prisma: ", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
