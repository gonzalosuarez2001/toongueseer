import { useToon } from "@/shared/hooks/ToonProvider";
import React from "react";

export default function ToonCongrats() {
  const { dailyToon, cartoon, toons, solved } = useToon();

const toon = toons.find((t) => t.id === dailyToon);

  return <div className=""></div>;
}
