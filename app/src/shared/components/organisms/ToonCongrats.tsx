import { useToon } from "@/shared/hooks/ToonContext";
import React from "react";

export default function ToonCongrats() {
  const { dailyToon, cartoon, toons, solved } = useToon();

  const toon = toons.find((t) => t.id === dailyToon);

  return (
    <>
      {solved && (
        <div className="bg-white/80 border-4 border-simpsons rounded-lg mt-5 p-4 flex flex-col items-center">
          <p className="text-3xl mb-2">Congratulations!</p>
          <p className="text-xl text-center mb-2">
            You are the <span className="font-bold">150th</span> player to guess today's character!
          </p>
          <div className="flex flex-col items-center mt-2 mb-2">
            <span className="text-lg text-gray-700">Next toon in:</span>
            <span className="text-2xl font-mono">23:59:59</span>
          </div>
          <p className="text-xl text-center mt-2 text-gray-800">Thank you for playing ToonGuesser!<br/>See you tomorrow!</p>
          <p className="text-xl text-center mt-2 text-gray-800">Back to menu</p>
        </div>
      )}
    </>
  );
}
