import { createSlice } from "@reduxjs/toolkit";
import { THUNK_STATUS } from "../../utils/constants/redux.constants";
import { loginAsyncThunk } from "../asyncThunk";

const initialState = {
  user: null,
  token: null,
  loginStatus: null,
  registerStatus: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsyncThunk.pending, (state, action) => {
      state.loginStatus = THUNK_STATUS.PENDING;
    });
    builder.addCase(loginAsyncThunk.fulfilled, (state, action) => {
      state.loginStatus = THUNK_STATUS.SUCCESS;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
    });
    builder.addCase(loginAsyncThunk.rejected, (state, action) => {
      state.loginStatus = THUNK_STATUS.REJECTED;
    });
  },
});

export default AuthSlice.reducer;
export const { logout } = AuthSlice.actions;
