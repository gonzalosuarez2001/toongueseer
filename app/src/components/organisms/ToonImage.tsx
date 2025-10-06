import React, { useEffect, useState, useRef } from "react";
import PixelableImage from "./PixelableImage";
import { useToon } from "@/hooks/ToonContext";

export default function ToonImage() {
  const divRef = useRef<HTMLDivElement>(null);

  const {
    dailyToon,
    solved,
    counter,
    rotation,
    pixelDificulty,
    saturationDificulty,
    borderStyle,
  } = useToon();

  const [hasMounted, setHasMounted] = useState<boolean>(false);

  const formatPixelDificulty = solved ? 0 : pixelDificulty;
  const formatSaturationDificulty = solved ? 0 : saturationDificulty;

  const formatRotation = solved ? false : rotation;

  const triggerMistakeAnimation = () => {
    if (!divRef.current) return;
    const element = divRef.current;

    element.classList.remove("animate-mistake");
    void element.offsetWidth;
    element.classList.add("animate-mistake");
  };

  useEffect(() => {
    if (hasMounted) {
      triggerMistakeAnimation();
    } else if (counter > 0) {
      triggerMistakeAnimation();
      setHasMounted(true);
    }
  }, [counter]);

  return (
    <div
      ref={divRef}
      className={`${
        solved && "animate-scale"
      } bg-white/80 border-4 ${borderStyle} p-4 rounded-lg mt-5 flex justify-center items-center flex-col`}
    >
      <PixelableImage
        src={`/simpsons_toons/${dailyToon}.webp`}
        width={300}
        height={300}
        pixelDificulty={formatPixelDificulty}
        saturationDificulty={formatSaturationDificulty}
        enableRotation={formatRotation}
      />
    </div>
  );
}
