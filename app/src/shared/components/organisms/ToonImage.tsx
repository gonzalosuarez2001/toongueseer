import React, { useEffect, useState, useRef } from "react";
import PixelableImage from "./PixelableImage";
import { useToon } from "@/shared/hooks/ToonContext";

export default function ToonImage() {
  const divRef = useRef<HTMLDivElement>(null);

  const { dailyToon, solved, counter } = useToon();

  const [hasMounted, setHasMounted] = useState<boolean>(false);

  const dificulty = solved ? 0 : 9;

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
      } bg-white/80 border-4 border-simpsons p-4 rounded-lg mt-5 flex justify-center items-center flex-col`}
    >
      <PixelableImage
        src={`/simpsons_toons/${dailyToon}.webp`}
        width={300}
        height={300}
        dificulty={dificulty}
        enableSaturation={true}
        enableRotation={dificulty == 0 ? false : true}
      />
      {solved && (
        <div className="text-center mt-5">
          <p className="text-2xl italic">"Stupid Flanders!"</p>
        </div>
      )}
    </div>
  );
}
