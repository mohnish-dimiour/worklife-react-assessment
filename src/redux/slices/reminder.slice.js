import { createSlice } from "@reduxjs/toolkit";
import { THUNK_STATUS } from "../../utils/constants/redux.constants";
import {
  getRemindersAsyncThunk,
  getUserRemindersAsyncThunk,
} from "../asyncThunk";

const initialState = {
  reminderList: [],
  reminderListStatus: null,
  userReminderList: [],
  userReminderListStatus: null,
};

export const ReminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRemindersAsyncThunk.pending, (state, action) => {
      // Handle pending reminder list request
      state.reminderListStatus = THUNK_STATUS.PENDING;
    });
    builder.addCase(getRemindersAsyncThunk.fulfilled, (state, action) => {
      // Handle successful reminder list retrieval
      state.reminderListStatus = THUNK_STATUS.SUCCESS;
      state.reminderList = action.payload.data;
    });
    builder.addCase(getRemindersAsyncThunk.rejected, (state, action) => {
      // Handle reminder list request rejection
      state.reminderListStatus = THUNK_STATUS.REJECTED;
    });
    builder.addCase(getUserRemindersAsyncThunk.pending, (state, action) => {
      // Handle pending user-specific reminder list request
      state.userReminderListStatus = THUNK_STATUS.PENDING;
    });
    builder.addCase(getUserRemindersAsyncThunk.fulfilled, (state, action) => {
      // Handle successful user-specific reminder list retrieval
      state.userReminderListStatus = THUNK_STATUS.SUCCESS;
      state.userReminderList = action.payload.data;
    });
    builder.addCase(getUserRemindersAsyncThunk.rejected, (state, action) => {
      // Handle user-specific reminder list request rejection
      state.userReminderListStatus = THUNK_STATUS.REJECTED;
    });
  },
});

export default ReminderSlice.reducer;
