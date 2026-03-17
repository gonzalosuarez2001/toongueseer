// Env Config
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cron from "node-cron";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { randomInt } from "crypto";

const PORT = process.env.PORT || "8082";

// Server
const app = express();

// DB
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

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

    for (const cartoon of cartoons) {
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
    }
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
  "0 0 * * *",
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
