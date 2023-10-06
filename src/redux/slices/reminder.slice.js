import { createSlice } from "@reduxjs/toolkit";
import { THUNK_STATUS } from "../../utils/constants/redux.constants";
import { getRemindersAsyncThunk } from "../asyncThunk";
import { getUserRemindersAsyncThunk } from "../asyncThunk/reminder.asyncThunk";

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
      state.reminderListStatus = THUNK_STATUS.PENDING;
    });
    builder.addCase(getRemindersAsyncThunk.fulfilled, (state, action) => {
      state.reminderListStatus = THUNK_STATUS.SUCCESS;
      state.reminderList = action.payload.data;
    });
    builder.addCase(getRemindersAsyncThunk.rejected, (state, action) => {
      state.reminderListStatus = THUNK_STATUS.REJECTED;
    });
    builder.addCase(getUserRemindersAsyncThunk.pending, (state, action) => {
      state.userReminderListStatus = THUNK_STATUS.PENDING;
    });
    builder.addCase(getUserRemindersAsyncThunk.fulfilled, (state, action) => {
      state.userReminderListStatus = THUNK_STATUS.SUCCESS;
      state.userReminderList = action.payload.data;
    });
    builder.addCase(getUserRemindersAsyncThunk.rejected, (state, action) => {
      state.userReminderListStatus = THUNK_STATUS.REJECTED;
    });
  },
});

export default ReminderSlice.reducer;
