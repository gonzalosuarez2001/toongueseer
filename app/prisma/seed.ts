const { PrismaClient } = require("@prisma/client");
const path = require("path");
const fs = require("fs");

type Toon = {
  id: number;
  name: string;
  image_url: string;
};

type Cartoon = {
  id: number;
  name: string;
};

const cartoonList = ["simpsons"];

const prisma = new PrismaClient();

const dataDir = path.join(process.cwd(), "data");
const toons: Record<string, Toon[]> = {};

const files: string[] = fs.readdirSync(dataDir);

files.forEach((file) => {
  if (file.endsWith(".json")) {
    const filePath = path.join(dataDir, file);
    const rawData = fs.readFileSync(filePath, "utf-8");
    const jsonData: Toon[] = JSON.parse(rawData);

    const name = path.parse(file).name;
    toons[name] = jsonData;
  }
});

async function insertCartoons() {
  const cartoons: Cartoon[] = [];
  await Promise.all(
    cartoonList.map(async (cartoon) => {
      const res = await prisma.cartoon.create({
        data: { name: cartoon },
      });
      cartoons.push(res);
    })
  );
  return cartoons;
}

async function insertStats(cartoons: Cartoon[]) {
  await Promise.all(
    cartoons.map(async (cartoon: Cartoon) => {
      await prisma.stats.create({
        data: {
          cartoon_id: cartoon.id,
        },
      });
    })
  );
}

async function insertToons(cartoons: Cartoon[]) {
  await Promise.all(
    cartoons.map(async (cartoon: Cartoon) => {
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
