import React from "react";
import PixelableImage from "./PixelableImage";
import { useToon } from "@/shared/hooks/ToonProvider";

export default function ToonImage() {
  const { dailyToon, solved } = useToon();

  const dificulty = solved ? 0 : 9;

  return (
    <div className="bg-white/80 border-4 border-simpsons p-4 rounded-lg mt-10">
      <PixelableImage
        src={`/simpsons_toons/${dailyToon}.webp`}
        width={300}
        height={300}
        dificulty={dificulty}
        enableSaturation={true}
        enableRotation={dificulty == 0 ? false : true}
      />
    </div>
  );
}
