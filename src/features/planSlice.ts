import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type PlanContent = {
  plan: "basic" | "standart" | "premium";
};

interface PlanState {
  plan: PlanContent | null;
}

const initialState: PlanState = {
  plan: null,
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    changePlan: (state, action: { payload: PlanContent }) => {
      state.plan = action.payload;
    },
  },
});

export const { changePlan } = planSlice.actions;

export const selectPlan = (state: RootState) => state.plan.plan;

export default planSlice.reducer;
