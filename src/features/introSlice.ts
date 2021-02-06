import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IntroState {
  intro: boolean;
}

const initialState: IntroState = {
  intro: false,
};

export const introSlice = createSlice({
  name: "intro",
  initialState,
  reducers: {
    openIntro: (state) => {
      state.intro = true;
    },
    closeIntro: (state) => {
      state.intro = false;
    },
  },
});

export const { openIntro, closeIntro } = introSlice.actions;

export const selectIntro = (state: RootState) => state.intro.intro;

export default introSlice.reducer;
