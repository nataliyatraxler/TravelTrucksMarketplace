import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "./operations";

const initialState = {
  items: [],
  total: 0,
  currentPage: 1,
  currentCamper: null,
  loading: false,
  fetchError: null,
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch campers
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.fetchError = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        if (state.currentPage === 1) {
          state.items = action.payload.items;
          state.total = action.payload.total;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        if (action.payload.status === 404) {
          state.items = [];
          state.currentCamper = null;
          state.total = 0;
        } else {
          state.fetchError = action.payload.message;
        }
        state.loading = false;
      })
      // Fetch camper
      .addCase(fetchCamper.pending, (state) => {
        state.loading = true;
        state.fetchError = null;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.currentCamper = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        if (action.payload.status === 404) {
          state.currentCamper = null;
        } else {
          state.fetchError = action.payload.message;
        }
        state.loading = false;
      });
  },
});

export const { updateCurrentPage } = slice.actions;
export default slice.reducer;
