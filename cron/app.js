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

// Cron Job Function
async function resetDailyToons() {
    // resetear los toons de todos los cartoons
  const toons = await prisma.toon.findMany();
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
