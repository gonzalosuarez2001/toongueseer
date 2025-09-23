"use client";
import React, { useEffect, useState } from "react";
import ToonSelector from "../molecules/ToonSelector";
import ToonTracker from "../molecules/ToonTracker";
import type { Toon } from "../../types";

export default function ToonPicker({
  toons,
  cartoon,
}: {
  toons: Toon[];
  cartoon: string;
}) {
  const [triedToons, setTriedToons] = useState<Toon[]>([]);

  const loadAnswers = () => {
    const answers = localStorage.getItem(`${cartoon}_answers`);
    if (answers) {
      const answersArray = JSON.parse(answers);
      setTriedToons(
        answersArray
          .map((id: number) => toons.find((toon) => toon.id == id))
          .reverse()
      );
    } else {
      setTriedToons([]);
    }
  };

  useEffect(() => {
    loadAnswers();
  }, []);

  return (
    <div>
      <div className="bg-white/80 border-4 border-simpsons rounded-lg mt-5">
        <ToonSelector
          toons={toons}
          cartoon={cartoon}
          loadAnswers={loadAnswers}
        />
      </div>

          <ToonTracker triedToons={triedToons} cartoon={cartoon} />
        
    </div>
  );
}
