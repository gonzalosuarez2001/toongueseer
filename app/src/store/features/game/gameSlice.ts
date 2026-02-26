import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Cartoon, Toon } from "../../../types";
import cartoonConfig from "../../../cartoonConfig";

interface GameState {
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
  loading: boolean;
  pixelationLevels: number[];
  saturationLevels: number[];
  bgStyle: string;
  borderStyle: string;
  textStyle: string;
  scrollStyle: string;
}

type SetFieldPayload<K extends keyof GameState> = {
  field: K;
  value: GameState[K];
};

const initialState: GameState = {
  cartoon: "simpsons",
  toons: [],
  triedToons: [],
  dailyToonId: 0,
  dailyToonImage: "",
  desaturation: true,
  rotation: true,
  depixelation: true,
  rotationAngle: 0,
  pixelationLevels: [],
  saturationLevels: [],
  counter: 0,
  solved: false,
  loading: true,
  pixelDificulty: Number(process.env.NEXT_PUBLIC_MAX_DIFFICULTY) || 7,
  saturationDificulty: Number(process.env.NEXT_PUBLIC_MAX_DIFFICULTY) || 7,
  bgStyle: "",
  borderStyle: "",
  textStyle: "",
  scrollStyle: "",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setupToon: (
      state,
      action: PayloadAction<{
        cartoon: Cartoon;
        toons: Toon[];
        dailyToon: Toon;
      }>,
    ) => {
      state.cartoon = action.payload.cartoon;
      state.toons = action.payload.toons;
      state.dailyToonId = action.payload.dailyToon.id;
      state.dailyToonImage = action.payload.dailyToon.image_url;
      state.pixelationLevels =
        cartoonConfig[action.payload.cartoon].pixelationLevels;
      state.saturationLevels =
        cartoonConfig[action.payload.cartoon].saturationLevels;
    },
    addAnswer: (state, action: PayloadAction<number>) => {
      state.triedToons = [
        ...state.triedToons,
        state.toons.find((toon) => toon.id === action.payload)!,
      ].reverse();
    },
    addCounter: (state) => {
      state.counter = state.counter + 1;
    },
    lowDepixelationLevel: (state) => {
      state.pixelDificulty = state.pixelDificulty - 1;
    },
    lowDesaturationLevel: (state) => {
      state.saturationDificulty = state.saturationDificulty - 1;
    },
    toggleDepixelation: (state) => {
      state.depixelation = !state.depixelation;
    },
    toggleRotation: (state) => {
      state.rotation = !state.rotation;
    },
    toggleDesaturation: (state) => {
      state.desaturation = !state.desaturation;
    },
    loadStyles: (state, action: PayloadAction<Cartoon>) => {
      const cartoon = action.payload;
      state.bgStyle = cartoonConfig[cartoon].background;
      state.borderStyle = cartoonConfig[cartoon].border;
      state.textStyle = cartoonConfig[cartoon].text;
      state.scrollStyle = cartoonConfig[cartoon].scroll;
    },
    setField: <K extends keyof GameState>(
      state: GameState,
      action: PayloadAction<SetFieldPayload<K>>,
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const {
  setupToon,
  setField,
  addAnswer,
  addCounter,
  lowDepixelationLevel,
  lowDesaturationLevel,
  toggleDepixelation,
  toggleDesaturation,
  toggleRotation,
  loadStyles,
} = gameSlice.actions;

export default gameSlice.reducer;
