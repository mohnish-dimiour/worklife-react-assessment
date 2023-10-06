export const ASYNC_ROUTES = {
  // AUTH
  LOGIN: "auth/login",
  REGISTER: "auth/register",

  // REMINDERS
  GET_REMINDERS: "reminders/getReminders",
  ADD_REMINDER: "reminders/addReminder",
  GET_USER_REMINDERS: "reminders/getUserReminders",

  // WORK SCHEDULE
  GET_WORKSCHEDULE: "workSchedule/get",
  UPDATE_WORKSCHEDULE: "workSchedule/update",

  // WORK SCHEDULE
  GET_MOTIVATION: "motivation/get",
};

export const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

export const THUNK_STATUS = {
  PENDING: "pending",
  SUCCESS: "success",
  REJECTED: "reject",
};
