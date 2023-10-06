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
      console.log("yyyyyaaa running");
      state.workScheduleStatus = THUNK_STATUS.PENDING;
    });
    builder.addCase(getWorkScheduleAsyncThunk.fulfilled, (state, action) => {
      state.workScheduleStatus = THUNK_STATUS.SUCCESS;
      state.workSchedule = action.payload.data;
    });
    builder.addCase(getWorkScheduleAsyncThunk.rejected, (state, action) => {
      state.workScheduleStatus = THUNK_STATUS.REJECTED;
    });
  },
});

export default WorkScheduleSlice.reducer;
