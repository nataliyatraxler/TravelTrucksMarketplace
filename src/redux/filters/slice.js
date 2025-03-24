import { createSlice } from "@reduxjs/toolkit";
import { defaultParams } from "../../utils/params";

const initialState = { ...defaultParams };

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      Object.assign(state, action.payload);
    },
    resetFilters: (state) => {
      Object.assign(state, defaultParams);
    },
  },
});

export const { updateFilters, resetFilters } = slice.actions;
export default slice.reducer;
