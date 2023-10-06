import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../../utils/constants/redux.constants";
import {
  addRemindersService,
  getRemindersService,
  getUserRemindersService,
} from "../services";

// Async thunk for fetching reminders
export const getRemindersAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_REMINDERS,
  async (_, { rejectWithValue }) => {
    try {
      // To fetch reminders
      const response = await getRemindersService();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for adding a reminder
export const addReminderAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.ADD_REMINDER,
  async (payload, { rejectWithValue }) => {
    try {
      // Add a reminder
      const response = await addRemindersService(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for fetching user reminders
export const getUserRemindersAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_USER_REMINDERS,
  async (_, { rejectWithValue }) => {
    try {
      // Fetch user-specific reminders
      const response = await getUserRemindersService();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
