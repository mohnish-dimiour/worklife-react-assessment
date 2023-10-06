import { createSlice } from "@reduxjs/toolkit";
import { THUNK_STATUS } from "../../utils/constants/redux.constants";
import { getWorkScheduleAsyncThunk } from "../asyncThunk";

const initialState = {
  workSchedule: [],
  workScheduleStatus: null,
};

export const WorkScheduleSlice = createSlice({
  name: "work",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWorkScheduleAsyncThunk.pending, (state, action) => {
      // Handle pending work schedule request
      state.workScheduleStatus = THUNK_STATUS.PENDING;
    });
    builder.addCase(getWorkScheduleAsyncThunk.fulfilled, (state, action) => {
      // Handle successful work schedule retrieval
      state.workScheduleStatus = THUNK_STATUS.SUCCESS;
      state.workSchedule = action.payload.data;
    });
    builder.addCase(getWorkScheduleAsyncThunk.rejected, (state, action) => {
      // Handle work schedule request rejection
      state.workScheduleStatus = THUNK_STATUS.REJECTED;
    });
  },
});

export default WorkScheduleSlice.reducer;
