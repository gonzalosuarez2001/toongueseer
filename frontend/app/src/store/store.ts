import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/game/gameSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      game: gameReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
