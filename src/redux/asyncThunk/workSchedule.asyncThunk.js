import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../../utils/constants/redux.constants";
import { updateWorkScheduleService, getWorkScheduleService } from "../services";

// Async thunk for fetching work schedule
export const getWorkScheduleAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_WORKSCHEDULE,
  async (_, { rejectWithValue }) => {
    try {
      // Fetch the work schedule
      const response = await getWorkScheduleService();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for updating work schedule
export const updateWorkScheduleAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.UPDATE_WORKSCHEDULE,
  async (payload, { rejectWithValue }) => {
    try {
      // Update the work schedule
      const response = await updateWorkScheduleService(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
