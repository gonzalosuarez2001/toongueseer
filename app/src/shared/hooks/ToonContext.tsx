"use client";

import React, { useState, useContext, createContext } from "react";
import type { Toon } from "../types";

type ToonContextType = {
  cartoon: string;
  toons: Toon[];
  dailyToon: number;
  solved: boolean;
  triedToons: Toon[];
  counter: number;
  setToons: React.Dispatch<React.SetStateAction<Toon[]>>;
  setDailyToon: React.Dispatch<React.SetStateAction<number>>;
  setCartoon: React.Dispatch<React.SetStateAction<string>>;
  setSolved: React.Dispatch<React.SetStateAction<boolean>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  addTriedToon: (id: number) => void;
  addCounter: () => void;
  loadToonsTried: (cartoon: string, toons: Toon[]) => void;
  loadSolved: (cartoon: string) => void;
  loadCounter: (cartoon: string) => void;
};

const ToonContext = createContext<ToonContextType | undefined>(undefined);

export const useToon = () => {
  const context = useContext(ToonContext);
  if (!context) {
    throw new Error("useToon must be used within a ToonProvider");
  }
  return context;
};

export function ToonProvider({ children }: { children: React.ReactNode }) {
  const [cartoon, setCartoon] = useState<string>("Toon");
  const [toons, setToons] = useState<Toon[]>([]);
  const [dailyToon, setDailyToon] = useState<number>(0);
  const [triedToons, setTriedToons] = useState<Toon[]>([]);
  const [solved, setSolved] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  const addTriedToon = (id: number) => {
    const previousAnswers = localStorage.getItem(`${cartoon}_answers`);
    if (previousAnswers) {
      const answers = JSON.parse(previousAnswers);
      localStorage.setItem(
        `${cartoon}_answers`,
        JSON.stringify([...answers, id])
      );
    } else {
      localStorage.setItem(`${cartoon}_answers`, JSON.stringify([id]));
    }
    setTriedToons((prev) =>
      [...prev, toons.find((toon) => toon.id === id)!].reverse()
    );
  };

  const addCounter = () => {
    const previousCounter = localStorage.getItem(`${cartoon}_counter`);
    if (previousCounter) {
      const counter = Number(previousCounter);
      localStorage.setItem(`${cartoon}_counter`, (counter + 1).toString());
    } else {
      localStorage.setItem(`${cartoon}_counter`, "1");
    }
    setCounter((prev) => prev + 1);
  };

  const loadCounter = (cartoon: string) => {
    const counter = localStorage.getItem(`${cartoon}_counter`);
    if (counter) {
      setCounter(Number(counter));
    } else {
      setCounter(0);
      localStorage.setItem(`${cartoon}_counter`, "0");
    }
  };

  const loadToonsTried = (cartoon: string, toons: Toon[]) => {
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
      localStorage.setItem(`${cartoon}_answers`, "[]");
    }
  };

  const loadSolved = (cartoon: string) => {
    const solved = localStorage.getItem(`${cartoon}_solved`);
    if (solved == "true") {
      setSolved(true);
    } else {
      setSolved(false);
      localStorage.setItem(`${cartoon}_solved`, "false");
    }
  };

  return (
    <ToonContext.Provider
      value={{
        counter,
        cartoon,
        solved,
        toons,
        triedToons,
        dailyToon,
        setToons,
        setCounter,
        setCartoon,
        setSolved,
        setDailyToon,
        addTriedToon,
        addCounter,
        loadToonsTried,
        loadSolved,
        loadCounter,
      }}
    >
      {children}
    </ToonContext.Provider>
  );
}
