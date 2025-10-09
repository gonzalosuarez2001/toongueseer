"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Toon } from "../../types";
import { useToon } from "@/hooks/ToonContext";
import confetti from "canvas-confetti";
import Text from "./Text";

export default function ToonSelector() {
  const {
    addTriedToon,
    addCounter,
    dailyToonId,
    cartoon,
    toons,
    setSolved,
    solved,
    borderStyle,
    scrollStyle,
  } = useToon();

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState<string>("");
  const [filteredToons, setFilteredToons] = useState<Toon[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const isOpen: boolean = value.trim() !== "" && isFocused;

  const shootConfetti = () => {
    confetti({
      particleCount: 200,
      angle: 60,
      spread: 150,
      origin: { x: 0, y: 1 },
    });
    confetti({
      particleCount: 200,
      angle: 120,
      spread: 150,
      origin: { x: 1, y: 1 },
    });
    confetti({
      particleCount: 200,
      angle: -60,
      spread: 150,
      origin: { x: 0, y: -0.25 },
    });
    confetti({
      particleCount: 200,
      angle: 240,
      spread: 150,
      origin: { x: 1, y: -0.25 },
    });
  };

  const handleSelect = async (id: number) => {
    if (id === dailyToonId) {
      shootConfetti();
      localStorage.setItem(`${cartoon}_solved`, "true");
      setSolved(true);
    } else {
      addTriedToon(id);
      addCounter();
    }

    setIsFocused(false);
    if (inputRef.current) {
      setValue("");
      if (!(id === dailyToonId)) {
        inputRef.current.focus();
      }
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
    <>
      {!solved && (
        <div
          className={`relative bg-white/80 border-4 ${borderStyle} rounded-lg mt-5 z-10`}
        >
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            type="text"
            placeholder="Search..."
            className="w-full border border-none outline-none p-4 text-lg"
          />
          {isOpen && (
            <div
              ref={containerRef}
              className={`absolute w-full flex flex-col left-0 top-16 bg-white max-h-56 overflow-y-scroll ${scrollStyle} rounded-lg`}
            >
              {filteredToons.map((toon, index) => {
                if (index > 19) return null;
                return (
                  <button
                    onClick={() => handleSelect(toon.id)}
                    key={toon.id}
                    className="flex items-center p-2 hover:bg-gray-100/80 transition-colors cursor-pointer"
                  >
                    <Image
                      src={`/${cartoon}_toons` + toon.image_url}
                      alt="Character"
                      width={60}
                      height={60}
                      className="border-2 border-gray-700 rounded-lg p-1 bg-white"
                    />
                    <Text type="md" className="ms-4">
                      {toon.name}
                    </Text>
                  </button>
                );
              })}
              {filteredToons.length === 0 && (
                <Text type="md" className="p-4">
                  No se encontraron resultados
                </Text>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
