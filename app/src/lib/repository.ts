import { prisma } from "@/lib/db";

export async function getToons(cartoon: string) {
  try {
    const toons = await prisma.toon.findMany({
      where: { cartoon: { name: cartoon } },
    });
    return toons;
  } catch (error) {
    console.error("Error fetching toons:", error);
    return [];
  }
}

export async function getDailyToon(cartoon: string) {
  try {
    const res = await prisma.stats.findFirst({
      where: { cartoon: { name: cartoon } },
    });
    return res?.daily_toon || 0;
  } catch (error) {
    console.error("Error fetching daily toon:", error);
    return 0;
  }
}
