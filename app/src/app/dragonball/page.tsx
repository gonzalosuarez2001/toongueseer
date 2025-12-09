export const revalidate = 86400;

import ToonTemplate from "@/components/templates/ToonTemplate";
import { ToonProvider } from "@/hooks/ToonContext";
import { getToons, getDailyToon } from "@/lib/repository";
import type { Toon } from "../../types";

const cartoon = "dragonball";

export default async function Dragonball() {
  const toons: Toon[] = await getToons(cartoon);
  const dailyToon: Toon = await getDailyToon(cartoon);
  
  return (
    <ToonProvider>
      <ToonTemplate toons={toons} dailyToon={dailyToon} cartoon={cartoon} />
    </ToonProvider>
  );
}
