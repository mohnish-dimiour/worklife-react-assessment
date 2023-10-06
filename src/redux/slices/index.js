import { combineReducers } from "redux";
import authSlice from "./auth.slice";
import reminderSlice from "./reminder.slice";
import WorkScheduleSlice from "./workSchedule.slice";

export default combineReducers({
  auth: authSlice,
  reminder: reminderSlice,
  work: WorkScheduleSlice,
});
