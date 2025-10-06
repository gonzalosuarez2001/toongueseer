export const revalidate = 86400;

import ToonTemplate from "@/components/templates/ToonTemplate";
import { ToonProvider } from "@/hooks/ToonContext";
import { getToons, getDailyToon } from "@/lib/repository";
import type { Toon } from "@prisma/client";

const cartoon = "simpsons";

export default async function Simpsons() {
  const toons: Toon[] = await getToons(cartoon);
  const dailyToon: number = await getDailyToon(cartoon);

  return (
    <ToonProvider>
      <ToonTemplate toons={toons} dailyToon={dailyToon} cartoon={cartoon} />
    </ToonProvider>
  );
}
