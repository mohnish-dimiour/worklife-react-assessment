import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../../utils/constants/redux.constants";
import { loginServices, registerServices } from "../services";

// Async thunk for handling user login
export const loginAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.LOGIN,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await loginServices(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for handling user registration
export const registerAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.REGISTER,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await registerServices(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
