import { combineReducers } from "redux";
import authSlice from "./auth.slice";
import reminderSlice from "./reminder.slice";
import WorkScheduleSlice from "./workSchedule.slice";

// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  auth: authSlice,
  reminder: reminderSlice,
  work: WorkScheduleSlice,
});

export default rootReducer;
