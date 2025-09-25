import { useToon } from "@/shared/hooks/ToonContext";
import React from "react";

export default function ToonControls() {
  const {  solved } = useToon();


  return (
    <>
      {!solved && (
        <div className="bg-white/80 border-4 border-simpsons rounded-lg mt-10 p-4 flex justify-around items-center">
         <p>A</p>
         <p>B</p>
         <p>C</p>
        </div>
      )}
    </>
  );
}
