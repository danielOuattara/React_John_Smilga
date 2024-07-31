import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";

type TypeCounterStatus = "active" | "inactive" | "pending...";

type TypeCounterState = {
  count: number;
  status: TypeCounterStatus;
};

const initialState: TypeCounterState = {
  count: 0,
  status: "pending...",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    decrement: (state) => {
      state.count -= 1;
    },

    setStatus: (state, action: PayloadAction<TypeCounterStatus>) => {
      state.status = action.payload;
    },
  },
});

export const counterSliceActions = counterSlice.actions;
export default counterSlice.reducer;
