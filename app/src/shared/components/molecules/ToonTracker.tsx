"use client";
import React, { use, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Toon } from "../../types";

export default function ToonTracker({
  triedToons,
  cartoon,
}: {
  triedToons: Toon[];
  cartoon: string;
}) {
  return (
    <div className="flex flex-col gap-2 mt-5">
      {triedToons.map((toon, index) => {
        return (
          <div className="bg-simpsons/80 border-4 border-simpsons rounded-lg">
            <div
              key={toon.id}
              className={`${
                index == 0 && "animate-flash-red"
              } flex items-center p-2`}
            >
              <Image
                src={"/simpsons_toons" + toon.image_url}
                alt="Simpsons Character"
                width={60}
                height={60}
                className="border-2 border-gray-700 rounded-lg p-1 bg-white"
              />
              <p className="ms-4 font-semibold text-gray-700">{toon.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
