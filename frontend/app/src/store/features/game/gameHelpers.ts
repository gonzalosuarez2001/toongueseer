import { Cartoon, Toon } from "../../../types";
import cartoonConfig from "../../../cartoonConfig";

export const createGame = (
  cartoon: string,
  dailyToonId: number,
  rotationAngle: number,
) => {
  localStorage.setItem(`${cartoon}_daily_toon`, dailyToonId.toString());
  localStorage.setItem(`${cartoon}_answers`, "[]");
  localStorage.setItem(`${cartoon}_solved`, "false");
  localStorage.setItem(`${cartoon}_counter`, "0");
  localStorage.setItem(
    `${cartoon}_pixel_dificulty`,
    process.env.NEXT_PUBLIC_MAX_DIFFICULTY || "7",
  );
  localStorage.setItem(
    `${cartoon}_saturation_dificulty`,
    process.env.NEXT_PUBLIC_MAX_DIFFICULTY || "7",
  );
  localStorage.setItem(`${cartoon}_depixelation`, "true");
  localStorage.setItem(`${cartoon}_rotation`, "true");
  localStorage.setItem(`${cartoon}_desaturation`, "true");
  localStorage.setItem(`${cartoon}_rotation_angle`, rotationAngle.toString());
};

export const addAnswer = (cartoon: string, toonId: number) => {
  const previousAnswers = localStorage.getItem(`${cartoon}_answers`);
  if (previousAnswers) {
    const answers = JSON.parse(previousAnswers);
    localStorage.setItem(
      `${cartoon}_answers`,
      JSON.stringify([...answers, toonId]),
    );
  } else {
    localStorage.setItem(`${cartoon}_answers`, JSON.stringify([toonId]));
  }
};

export const addCounter = (cartoon: string, toonId: number) => {
  const previousCounter = localStorage.getItem(`${cartoon}_counter`);
  if (previousCounter) {
    const counter = Number(previousCounter);
    localStorage.setItem(`${cartoon}_counter`, (counter + 1).toString());
  } else {
    localStorage.setItem(`${cartoon}_counter`, "1");
  }
};

export const lowDepixelationLevel = (
  cartoon: string,
  pixelDificulty: number,
) => {
  const prevDificulty = localStorage.getItem(`${cartoon}_pixel_dificulty`);

  if (prevDificulty && prevDificulty != "1") {
    pixelDificulty = pixelDificulty - 1;
    localStorage.setItem(
      `${cartoon}_pixel_dificulty`,
      (Number(prevDificulty) - 1).toString(),
    );
  }
};

export const lowDesaturationLevel = (
  cartoon: string,
  saturationDificulty: number,
) => {
  const prevDificulty = localStorage.getItem(`${cartoon}_saturation_dificulty`);

  if (prevDificulty && prevDificulty != "1") {
    saturationDificulty = saturationDificulty - 1;
    localStorage.setItem(
      `${cartoon}_saturation_dificulty`,
      (Number(prevDificulty) - 1).toString(),
    );
  }
};

export const loadPixelDificulty = (cartoon: string) => {
  const pixelDificulty = localStorage.getItem(`${cartoon}_pixel_dificulty`);
  if (pixelDificulty) {
    return Number(pixelDificulty);
  } else {
    localStorage.setItem(
      `${cartoon}_pixel_dificulty`,
      process.env.NEXT_PUBLIC_MAX_DIFFICULTY || "7",
    );
    return Number(process.env.NEXT_PUBLIC_MAX_DIFFICULTY) || 7;
  }
};

export const loadSaturationDificulty = (cartoon: string) => {
  const saturationDificulty = localStorage.getItem(
    `${cartoon}_saturation_dificulty`,
  );

  if (saturationDificulty) {
    return Number(saturationDificulty);
  } else {
    localStorage.setItem(
      `${cartoon}_saturation_dificulty`,
      process.env.NEXT_PUBLIC_MAX_DIFFICULTY || "7",
    );
    return Number(process.env.NEXT_PUBLIC_MAX_DIFFICULTY) || 7;
  }
};

export const loadSolved = (cartoon: string) => {
  const solved = localStorage.getItem(`${cartoon}_solved`);
  if (solved == "true") {
    return true;
  } else {
    localStorage.setItem(`${cartoon}_solved`, "false");
    return false;
  }
};

export const loadTriedToons = (cartoon: string, toons: Toon[]) => {
  const answers = localStorage.getItem(`${cartoon}_answers`);
  if (answers) {
    const answersArray = JSON.parse(answers);
    return answersArray
      .map((id: number) => toons.find((toon) => toon.id == id))
      .reverse();
  } else {
    localStorage.setItem(`${cartoon}_answers`, "[]");
    return [];
  }
};

export const loadCounter = (cartoon: string) => {
  const counter = localStorage.getItem(`${cartoon}_counter`);
  if (counter) {
    return Number(counter);
  } else {
    localStorage.setItem(`${cartoon}_counter`, "0");
    return 0;
  }
};

export const loadControls = (cartoon: string) => {
  const depixelation = localStorage.getItem(`${cartoon}_depixelation`);
  const rotation = localStorage.getItem(`${cartoon}_rotation`);
  const desaturation = localStorage.getItem(`${cartoon}_desaturation`);

  let depixelationValue = true;
  let rotationValue = true;
  let desaturationValue = true;

  if (depixelation) {
    depixelationValue = JSON.parse(depixelation);
  } else {
    depixelationValue = true;
    localStorage.setItem(`${cartoon}_depixelation`, "true");
  }
  if (rotation) {
    rotationValue = JSON.parse(rotation);
  } else {
    rotationValue = true;
    localStorage.setItem(`${cartoon}_rotation`, "true");
  }
  if (desaturation) {
    desaturationValue = JSON.parse(desaturation);
  } else {
    desaturationValue = true;
    localStorage.setItem(`${cartoon}_desaturation`, "true");
  }

  return {
    depixelationValue,
    rotationValue,
    desaturationValue,
  };
};

export const loadRotation = (cartoon: Cartoon) => {
  const rotation = localStorage.getItem(`${cartoon}_rotation_angle`);
  if (rotation) {
    return Number(rotation);
  } else {
    const rotations = cartoonConfig[cartoon].rotationAngles;

    const randomRotation =
      rotations[Math.floor(Math.random() * rotations.length)];
    localStorage.setItem(
      `${cartoon}_rotation_angle`,
      randomRotation.toString(),
    );
    return randomRotation;
  }
};
