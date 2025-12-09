"use client";
import type { Toon, Cartoon } from "../../types";
import { useEffect } from "react";
import { useToon } from "@/hooks/ToonContext";
import ToonHeader from "../organisms/ToonHeader";
import ToonImage from "../organisms/ToonImage";
import ToonFooter from "../organisms/ToonFooter";
import ToonSelector from "../molecules/ToonSelector";
import ToonTracker from "../molecules/ToonTracker";
import ToonCongrats from "../organisms/ToonCongrats";
import ToonControls from "../organisms/ToonControls";
import ToonFootNote from "../organisms/ToonFootNote";
import cartoonConfig from "@/cartoonConfig";

export default function ToonTemplate({
  cartoon,
  toons,
  dailyToon,
}: {
  cartoon: Cartoon;
  toons: Toon[];
  dailyToon: Toon;
}) {
  const { loadContext, loading } = useToon();

  useEffect(() => {
    loadContext(cartoon, toons, dailyToon);
  }, []);

  let containerStyles = "";
  let loadingStyles = "";

  containerStyles = `${cartoonConfig[cartoon].backgroundImage} ${cartoonConfig[cartoon].font}`;
  loadingStyles = `${cartoonConfig[cartoon].loading}`;

  return (
    <div
      className={`${containerStyles} bg-fixed relative min-h-screen w-screen flex justify-center`}
    >
      {loading ? (
        <div className="h-100vh border w-full flex justify-center items-center">
          <div
            className={`${loadingStyles} size-12 border-4 border-transparent rounded-full animate-spin`}
          />
        </div>
      ) : (
        <div className="max-w-84">
          <ToonHeader />
          <ToonControls />
          <ToonImage />
          <ToonCongrats />
          <ToonSelector />
          <ToonTracker />
          <ToonFooter />
          <ToonFootNote />
        </div>
      )}
    </div>
  );
}
