"use client";
import PixelableImage from "@/shared/components/organisms/PixelableImage";
import Image from "next/image";
import type { Toon } from "../../types";
import { useEffect } from "react";
import { useToon } from "@/shared/hooks/ToonContext";
import ToonHeader from "../organisms/ToonHeader";
import ToonImage from "../organisms/ToonImage";
import ToonFooter from "../organisms/ToonFooter";
import ToonSelector from "../molecules/ToonSelector";
import ToonTracker from "../molecules/ToonTracker";
import ToonCongrats from "../organisms/ToonCongrats";

export default function SimpsonsTemplate({
  toons,
  dailyToon,
}: {
  toons: Toon[];
  dailyToon: number;
}) {
  const {
    setToons,
    setDailyToon,
    setCartoon,
    loadToonsTried,
    setSolved,
    loadSolved,
    loadCounter,
  } = useToon();

  useEffect(() => {
    setToons(toons);
    setDailyToon(dailyToon);
    setCartoon("simpsons");
    setSolved(localStorage.getItem("simpsons_solved") == "true");
    loadSolved("simpsons");
    loadToonsTried("simpsons", toons);
    loadCounter("simpsons");
  }, []);

  return (
    <div className="relative min-h-screen w-screen flex justify-center bg-toon-simpsons font-medium text-xl text-gray-700">
      <div>
        <ToonHeader />
        <ToonImage />
        <ToonCongrats />
        <ToonSelector />
        <ToonTracker />
        <ToonFooter />
      </div>
    </div>
  );
}
