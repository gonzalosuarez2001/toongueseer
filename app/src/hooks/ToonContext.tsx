"use client";

import React, { useState, useContext, createContext, useEffect } from "react";
import type { Toon } from "../types";
import cartoonConfig from "../cartoonConfig";

type Cartoon = keyof typeof cartoonConfig;

type ToonContextType = {
  cartoon: Cartoon;
  toons: Toon[];
  dailyToonId: number;
  dailyToonImage: string;
  solved: boolean;
  triedToons: Toon[];
  counter: number;
  desaturation: boolean;
  rotation: boolean;
  depixelation: boolean;
  pixelDificulty: number;
  saturationDificulty: number;
  rotationAngle: number;
  bgStyle: string;
  textStyle: string;
  borderStyle: string;
  scrollStyle: string;
  loading: boolean;
  switchDepixelation: () => void;
  switchRotation: () => void;
  switchDesaturation: () => void;
  pixelationLevels: number[];
  saturationLevels: number[];
  setToons: React.Dispatch<React.SetStateAction<Toon[]>>;
  setDailyToonId: React.Dispatch<React.SetStateAction<number>>;
  setCartoon: React.Dispatch<React.SetStateAction<Cartoon>>;
  setSolved: React.Dispatch<React.SetStateAction<boolean>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setDepixelation: React.Dispatch<React.SetStateAction<boolean>>;
  setDesaturation: React.Dispatch<React.SetStateAction<boolean>>;
  setRotation: React.Dispatch<React.SetStateAction<boolean>>;
  setPixelDificulty: React.Dispatch<React.SetStateAction<number>>;
  setSaturationDificulty: React.Dispatch<React.SetStateAction<number>>;
  addTriedToon: (id: number) => void;
  addCounter: () => void;
  loadContext: (cartoon: Cartoon, toons: Toon[], dailyToon: Toon) => void;
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
  const [cartoon, setCartoon] = useState<Cartoon>("simpsons");
  const [toons, setToons] = useState<Toon[]>([]);
  const [dailyToonId, setDailyToonId] = useState<number>(0);
  const [dailyToonImage, setDailyToonImage] = useState<string>("");
  const [triedToons, setTriedToons] = useState<Toon[]>([]);
  const [solved, setSolved] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const [rotation, setRotation] = useState<boolean>(true);
  const [depixelation, setDepixelation] = useState<boolean>(true);
  const [desaturation, setDesaturation] = useState<boolean>(true);

  const [pixelDificulty, setPixelDificulty] = useState<number>(
    Number(process.env.NEXT_PUBLIC_MAX_DIFFICULTY) || 7
  );
  const [saturationDificulty, setSaturationDificulty] = useState<number>(
    Number(process.env.NEXT_PUBLIC_MAX_DIFFICULTY) || 7
  );

  const [bgStyle, setBgStyle] = useState<string>("");
  const [borderStyle, setBorderStyle] = useState<string>("");
  const [textStyle, setTextStyle] = useState<string>("");
  const [scrollStyle, setScrollStyle] = useState<string>("");

  const [pixelationLevels, setPixelationLevels] = useState<number[]>([]);
  const [saturationLevels, setSaturationLevels] = useState<number[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const loadGame = (cartoon: Cartoon, toons: Toon[]) => {
    setSolved(localStorage.getItem(`${cartoon}_solved`) == "true");
    loadDificulty(cartoon);
    loadSolved(cartoon);
    loadToonsTried(cartoon, toons);
    loadCounter(cartoon);
    loadControls(cartoon);
    loadRotation(cartoon);
  };


  const loadRotation = (cartoon: Cartoon) => {
    const rotation = localStorage.getItem(`${cartoon}_rotation_angle`);
    if (rotation) {
      setRotationAngle(Number(rotation));
    } else {
      const rotations = cartoonConfig[cartoon].rotationAngles;

      const randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];
      localStorage.setItem(
        `${cartoon}_rotation_angle`,
        randomRotation.toString()
      );
      setRotationAngle(randomRotation);
    }
  };



  const loadToonsTried = (cartoon: string, toons: Toon[]) => {

  };

  const loadSolved = (cartoon: string) => {
   
  };

  const loadControls = (cartoon: string) => {
    const depixelation = localStorage.getItem(`${cartoon}_depixelation`);
    const rotation = localStorage.getItem(`${cartoon}_rotation`);
    const desaturation = localStorage.getItem(`${cartoon}_desaturation`);
    if (depixelation) {
      setDepixelation(JSON.parse(depixelation));
    } else {
      setDepixelation(true);
      localStorage.setItem(`${cartoon}_depixelation`, "true");
    }
    if (rotation) {
      setRotation(JSON.parse(rotation));
    } else {
      setRotation(true);
      localStorage.setItem(`${cartoon}_rotation`, "true");
    }
    if (desaturation) {
      setDesaturation(JSON.parse(desaturation));
    } else {
      setDesaturation(true);
      localStorage.setItem(`${cartoon}_desaturation`, "true");
    }
  };

  return (
    <ToonContext.Provider
      value={{
        pixelationLevels,
        saturationLevels,
        rotationAngle,
        counter,
        cartoon,
        pixelDificulty,
        saturationDificulty,
        solved,
        toons,
        triedToons,
        dailyToonId,
        dailyToonImage,
        rotation,
        depixelation,
        desaturation,
        bgStyle,
        textStyle,
        borderStyle,
        scrollStyle,
        loading,
        switchDepixelation,
        switchRotation,
        switchDesaturation,
        setRotation,
        setSaturationDificulty,
        setPixelDificulty,
        setDepixelation,
        setDesaturation,
        setToons,
        setCounter,
        setCartoon,
        setSolved,
        setDailyToonId,
        addTriedToon,
        addCounter,
        loadContext,
      }}
    >
      {children}
    </ToonContext.Provider>
  );
}
