import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../../utils/constants/redux.constants";
import { motivationService } from "../services";

export const getMotivationAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_MOTIVATION,
  async (paylaod, { rejectWithValue }) => {
    try {
      return await motivationService(paylaod);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
