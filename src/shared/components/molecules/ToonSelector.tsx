"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Toon } from "../../types";

export default function ToonSelector({ toons }: { toons: Toon[] }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const isOpen: boolean = value.trim() !== "" && isFocused;

  const filteredToons: Toon[] = toons.filter((toon) =>
    toon.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="relative bg-white/70 border-4 border-simpsons rounded-lg mt-5">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        placeholder="Buscar..."
        className="w-full border border-none outline-none p-4"
      />
      {isOpen && (
        <div className="absolute w-full flex flex-col left-0 top-16 bg-white/70 max-h-50 overflow-y-scroll scrollbar-simpsons rounded-lg">
          {filteredToons.map((toon) => {
            return (
              <div
                key={toon.id}
                className="flex items-center p-2 hover:bg-gray-100/70 transition-colors cursor-pointer"
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
            );
          })}
        </div>
      )}
    </div>
  );
}
