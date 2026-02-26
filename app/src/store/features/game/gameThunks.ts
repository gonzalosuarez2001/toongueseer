import type { AppDispatch, RootState } from "../../store";
import {
  setupToon,
  addAnswer,
  addCounter,
  lowDepixelationLevel,
  lowDesaturationLevel,
  toggleDepixelation,
  toggleRotation,
  toggleDesaturation,
  loadStyles,
  setField,
} from "./gameSlice";
import * as gameHelpers from "./gameHelpers";
import type { Cartoon, Toon } from "../../../types";
import cartoonConfig from "@/cartoonConfig";

export const setupToonGame =
  (cartoon: Cartoon, toons: Toon[], dailyToon: Toon) =>
  (dispatch: AppDispatch) => {
    dispatch(setupToon({ cartoon, toons, dailyToon }));
    dispatch(loadStyles(cartoon));

    const daily = localStorage.getItem(`${cartoon}_daily_toon`);
    if (daily && daily == dailyToon.id.toString()) {
      const pixelDificulty = gameHelpers.loadPixelDificulty(cartoon);
      dispatch(setField({ field: "pixelDificulty", value: pixelDificulty }));

      const saturationDificulty = gameHelpers.loadSaturationDificulty(cartoon);
      dispatch(
        setField({ field: "saturationDificulty", value: saturationDificulty }),
      );

      const solved = gameHelpers.loadSolved(cartoon);
      dispatch(setField({ field: "solved", value: solved }));

      const triedToons = gameHelpers.loadTriedToons(cartoon, toons);
      dispatch(setField({ field: "triedToons", value: triedToons }));

      const counter = gameHelpers.loadCounter(cartoon);
      dispatch(setField({ field: "counter", value: counter }));

      const rotationAngle = gameHelpers.loadRotation(cartoon);
      dispatch(setField({ field: "rotationAngle", value: rotationAngle }));

      const controls = gameHelpers.loadControls(cartoon);
      dispatch(setField({ field: "rotation", value: controls.rotationValue }));
      dispatch(
        setField({ field: "depixelation", value: controls.depixelationValue }),
      );
      dispatch(
        setField({ field: "desaturation", value: controls.desaturationValue }),
      );
    } else {
      const rotations = cartoonConfig[cartoon].rotationAngles;

      const randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];

      dispatch(setField({ field: "rotationAngle", value: randomRotation }));

      gameHelpers.createGame(cartoon, dailyToon.id, randomRotation);
    }

    dispatch(setField({ field: "loading", value: false }));
  };

export const addTry =
  (toonId: number) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState().game;

    gameHelpers.addAnswer(state.cartoon, toonId);
    dispatch(addAnswer(toonId));

    gameHelpers.addCounter(state.cartoon, toonId);
    dispatch(addCounter());

    if (state.depixelation) {
      gameHelpers.lowDepixelationLevel(state.cartoon, state.pixelDificulty);
      dispatch(lowDepixelationLevel());
    }

    if (state.desaturation) {
      gameHelpers.lowDesaturationLevel(
        state.cartoon,
        state.saturationDificulty,
      );
      dispatch(lowDesaturationLevel());
    }
  };

export const toggleDepixelationAndPersist =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState().game;
    localStorage.setItem(
      `${state.cartoon}_depixelation`,
      state.depixelation.toString(),
    );
    dispatch(toggleDepixelation());
  };

export const toggleRotationAndPersist =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState().game;
    localStorage.setItem(
      `${state.cartoon}_rotation`,
      state.rotation.toString(),
    );
    dispatch(toggleRotation());
  };

export const toggleDesaturationAndPersist =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState().game;
    localStorage.setItem(
      `${state.cartoon}_desaturation`,
      state.desaturation.toString(),
    );
    dispatch(toggleDesaturation());
  };
