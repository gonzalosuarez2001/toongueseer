export const revalidate = 86400;

import ToonTemplate from "../../components/templates/ToonTemplate";
import { getToons, getDailyToon } from "../../lib/repository";
import type { Toon } from "../../types";

const cartoon = "pokemon";

export default async function Pokemon() {
  const toons: Toon[] = await getToons(cartoon);
  const dailyToon: Toon = await getDailyToon(cartoon);
  
  return (
      <ToonTemplate toons={toons} dailyToon={dailyToon} cartoon={cartoon} />
  );
}
