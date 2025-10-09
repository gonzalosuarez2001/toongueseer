// Env Config
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || "8082";
const cron = require("node-cron");
const { PrismaClient } = require("@prisma/client");
const { randomInt } = require("crypto");

// Server
const app = express();

// DB
const prisma = new PrismaClient();

// Types
type Cartoon = {
  id: number;
  name: string;
};

type Toon = {
  id: number;
  name: string;
  image_url: string;
  guessed: boolean;
  cartoon_id: number;
};

// Utility Functions
async function getDailyToons() {
  try {
    const cartoons = await prisma.cartoon.findMany();

    await Promise.all(
      cartoons.map(async (cartoon: Cartoon) => {
        const toons = await prisma.toon.findMany({
          where: { cartoon_id: cartoon.id },
        });

        const filteredToons = toons.filter(
          (toon: Toon) => toon.guessed === false
        );

        const randomNumber = getRandomInt(filteredToons.length);
        const selectedToon = filteredToons[randomNumber - 1].id;

        console.log(
          `New Daily Toon for ${cartoon.name}: ${selectedToon} ${
            toons.find((toon: Toon) => toon.id === selectedToon)?.name
          }`
        );

        if (filteredToons.length === 1) {
          await resetDailyToons(cartoon.id);
        }

        await prisma.stats.update({
          where: { cartoon_id: cartoon.id },
          data: {
            daily_toon: selectedToon,
          },
        });

        await prisma.toon.update({
          where: { id: selectedToon },
          data: {
            guessed: true,
          },
        });
      })
    );
  } catch (error) {
    console.error("Error while executing the cron:", error);
  }
}

async function resetDailyToons(cartoon_id: number) {
  await prisma.toon.updateMany({
    where: { cartoon_id: cartoon_id },
    data: { guessed: false },
  });
}

function getRandomInt(max: number): number {
  return randomInt(1, max + 1);
}

async function revalidateToons() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/revalidate`);
    const data = await res.json();
    console.log("Revalidation Response:", data);
  } catch (error) {
    console.error("Error during revalidation:", error);
  }
}

// Cron
cron.schedule(
  "* * * * *",
  () => {
    console.log("\nExecuting Toon Guesser Cron\n");
    getDailyToons();
    revalidateToons();
  },
  {
    timezone: "UTC",
  }
);

app.listen(PORT, () => {
  console.log(`Cron listening on port ${PORT}`);
});
