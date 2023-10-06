import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../../utils/constants/redux.constants";
import {
  addRemindersService,
  getRemindersService,
  getUserRemindersService,
} from "../services";

export const getRemindersAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_REMINDERS,
  async (_, { rejectWithValue }) => {
    try {
      return await getRemindersService();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addReminderAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.ADD_REMINDER,
  async (paylaod, { rejectWithValue }) => {
    try {
      return await addRemindersService(paylaod);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserRemindersAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_USER_REMINDERS,
  async (_, { rejectWithValue }) => {
    try {
      return await getUserRemindersService();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
