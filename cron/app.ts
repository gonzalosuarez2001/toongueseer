// Env Config
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || "8082";
const cron = require("node-cron");
const { PrismaClient } = require("@prisma/client");

// Server
const app = express();

// DB
const prisma = new PrismaClient();

// Utility Functions
function getRandomInt( max: number): number {
  return Math.floor(Math.random() * max) + 1;
}


async function resetDailyToons() {
  const cartoons = await prisma.cartoon.findMany();

  await Promise.all(cartoons.map((cartoon:)=>{
    const toons = await prisma.toons.findMany()
    const selectedToon = getRandomInt(toons.length)
  }))
}

// Cron
cron.schedule(
  "0 0 * * *",
  () => {
    console.log("\nEjecutando Cron de Toon Guesser\n");
    resetDailyToons();
  },
  {
    timezone: "UTC",
  }
);

app.listen(PORT, () => {
  console.log(`Cron listening on port ${PORT}`);
});
