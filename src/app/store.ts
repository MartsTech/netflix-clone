import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import introReducer from "../features/introSlice";
import planReducer from "../features/planSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    intro: introReducer,
    plan: planReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
