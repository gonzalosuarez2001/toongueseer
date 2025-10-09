import { useToon } from "@/hooks/ToonContext";
import Image from "next/image";
import React from "react";

export default function ToonHeader() {
  const { cartoon } = useToon();
  
  return (
    <div className="w-full flex justify-center mt-5">
      <Image
        src={`/${cartoon}_logo.png`}
        alt="Toon Logo"
        width={250}
        height={0}
      />
    </div>
  );
}
