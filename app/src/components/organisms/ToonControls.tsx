import { useToon } from "@/hooks/ToonContext";
import React from "react";
import { Palette, Image, RotateCw } from "lucide-react";
import ToonControlButton from "../molecules/ToonControlButton";

export default function ToonControls() {
  const {
    solved,
    desaturation,
    depixelation,
    rotation,
    switchDepixelation,
    switchRotation,
    switchDesaturation,
    pixelDificulty,
    saturationDificulty,
    borderStyle,
  } = useToon();

  return (
    <>
      {!solved && (
        <div
          className={`bg-gray-200/90 border-4 ${borderStyle} rounded-lg mt-5 p-4 flex justify-around`}
        >
          <ToonControlButton
            title="Depixelation"
            icon={Image}
            active={depixelation}
            onClick={switchDepixelation}
            levels={true}
            difficulty={pixelDificulty}
          />
          <ToonControlButton
            title="Rotation"
            icon={RotateCw}
            active={rotation}
            onClick={switchRotation}
          />
          <ToonControlButton
            title="Desaturation"
            icon={Palette}
            active={desaturation}
            onClick={switchDesaturation}
            levels={true}
            difficulty={saturationDificulty}
          />
        </div>
      )}
    </>
  );
}
