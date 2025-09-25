import { useToon } from "@/shared/hooks/ToonContext";
import React from "react";

export default function ToonCongrats() {
  const { dailyToon, cartoon, toons, solved } = useToon();

  const toon = toons.find((t) => t.id === dailyToon);

  return (
    <>
      {solved && (
        <div className="bg-white/80 border-4 border-simpsons rounded-lg mt-5 p-4 flex flex-col items-center">
          <p className="text-3xl">Congratulations!</p>
        </div>
      )}
    </>
  );
}
