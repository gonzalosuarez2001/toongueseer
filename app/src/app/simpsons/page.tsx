import PixelableImage from "@/shared/components/organisms/PixelableImage";
import SimpsonsTemplate from "@/shared/components/templates/SimpsonsTemplate";
import Image from "next/image";
import { ToonProvider } from "@/shared/hooks/ToonProvider";

async function getToons() {
  const res = await fetch("http://localhost:3000/api/simpsons");
  const data = await res.json();
  return data;
}

async function getDailyToon() {
  const res = await fetch("http://localhost:3000/api/simpsons/daily");
  const data = await res.json();
  return data;
}

export default async function Simpsons() {
  const toons = await getToons();
  const dailyToon = await getDailyToon();

  return (
    <ToonProvider>
      <SimpsonsTemplate toons={toons} dailyToon={dailyToon} />
    </ToonProvider>
  );
}
