import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCamperById, searchCampers } from "../../api/api-campers";
import { defaultParams } from "../../utils/params";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ params, page } = { params: defaultParams, page: 1 }, thunkAPI) => {
    try {
      const campers = await searchCampers(params, page);
      return campers;
    } catch (fetchError) {
      return thunkAPI.rejectWithValue({
        message: fetchError.message,
        status: fetchError.status,
      });
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const camper = await getCamperById(id);
      return camper;
    } catch (fetchError) {
      return thunkAPI.rejectWithValue({
        message: fetchError.message,
        status: fetchError.status,
      });
    }
  }
);
