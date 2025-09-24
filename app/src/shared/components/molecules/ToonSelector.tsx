"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Toon } from "../../types";
import { useToon } from "@/shared/hooks/ToonProvider";

export default function ToonSelector() {
  const { addTriedToon, addCounter, dailyToon, cartoon, toons, setSolved } =
    useToon();

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState<string>("");
  const [filteredToons, setFilteredToons] = useState<Toon[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const isOpen: boolean = value.trim() !== "" && isFocused;

  const handleSelect = async (id: number) => {
    if (id === dailyToon) {
      localStorage.setItem(`${cartoon}_solved`, "true");
      setSolved(true);
      return;
    }

    addTriedToon(id);
    addCounter();

    setIsFocused(false);
    if (inputRef.current) {
      setValue("");
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    const filtered = toons.filter((toon) => {
      const matchSearch = toon.name.toLowerCase().includes(value.toLowerCase());
      let notSelected = true;
      const answers = localStorage.getItem(`${cartoon}_answers`);
      if (answers) {
        notSelected = !JSON.parse(answers).includes(toon.id);
      }
      return matchSearch && notSelected;
    });
    setFilteredToons(filtered);
  }, [value, isFocused]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && inputRef.current) {
        setIsFocused(false);
        inputRef.current.blur();
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-white/80 border-4 border-simpsons rounded-lg mt-5">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        type="text"
        placeholder="Buscar..."
        className="w-full border border-none outline-none p-4 "
      />
      {isOpen && (
        <div
          ref={containerRef}
          className="absolute w-full flex flex-col left-0 top-16 bg-white max-h-55 overflow-y-scroll scrollbar-simpsons rounded-lg"
        >
          {filteredToons.map((toon) => {
            return (
              <button
                onClick={() => handleSelect(toon.id)}
                key={toon.id}
                className="flex items-center p-2 hover:bg-gray-100/80 transition-colors cursor-pointer"
              >
                <Image
                  src={"/simpsons_toons" + toon.image_url}
                  alt="Simpsons Character"
                  width={60}
                  height={60}
                  className="border-2 border-gray-700 rounded-lg p-1 bg-white"
                />
                <p className="ms-4 ">{toon.name}</p>
              </button>
            );
          })}
          {filteredToons.length === 0 && (
            <p className="p-4">No se encontraron resultados</p>
          )}
        </div>
      )}
    </div>
  );
}
