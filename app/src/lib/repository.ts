import { prisma } from "@/lib/db";
import type { Toon } from "@prisma/client";

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

export async function getDailyToon(cartoon: string): Promise<Toon> {
  try {
    const res = await prisma.stats.findFirst({
      where: { cartoon: { name: cartoon } },
    });

    const daily_toon = await prisma.toon.findFirst({
      where: { id: res?.daily_toon },
    });

    return daily_toon as Toon;
  } catch (error) {
    console.error("Error fetching daily toon:", error);
    throw error;
  }
}
