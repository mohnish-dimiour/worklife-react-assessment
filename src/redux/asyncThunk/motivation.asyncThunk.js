import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../../utils/constants/redux.constants";
import { motivationService } from "../services";

// Async thunk for fetching motivation data
export const getMotivationAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_MOTIVATION,
  async (payload, { rejectWithValue }) => {
    try {
      // Motivation service to fetch data
      const response = await motivationService(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
