import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../../utils/constants/redux.constants";
import { updateWorkScheduleService, getWorkScheduleService } from "../services";

export const getWorkScheduleAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_WORKSCHEDULE,
  async (_, { rejectWithValue }) => {
    try {
      return await getWorkScheduleService();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateWorkScheduleAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.UPDATE_WORKSCHEDULE,
  async (paylaod, { rejectWithValue }) => {
    try {
      return await updateWorkScheduleService(paylaod);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
