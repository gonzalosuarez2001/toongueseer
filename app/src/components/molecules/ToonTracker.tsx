"use client";
import React, { use, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Toon } from "../../types";
import { useToon } from "@/hooks/ToonContext";
import Text from "./Text";

export default function ToonTracker() {
  const { triedToons, solved, cartoon, bgStyle } = useToon();

  return (
    <div className="flex flex-col gap-2 mt-5">
      {triedToons.map((toon, index) => {
        return (
          <div
            key={toon.id}
            className={`${
              index == 0 && "animate-scale"
            } rounded-lg transition-transform`}
          >
            <div
              className={`${
                index === 0
                  ? solved
                    ? "bg-green-400"
                    : `animate-flash-red ${bgStyle}`
                  : bgStyle
              } flex items-center p-3 rounded-md`}
            >
              <Image
                src={`/${cartoon}_toons` + toon.image_url}
                alt="Character"
                width={60}
                height={60}
                className="border-2 border-gray-700 rounded-lg p-1 bg-white"
              />
              <Text type="lg" className="ms-4">
                {toon.name}
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
}
