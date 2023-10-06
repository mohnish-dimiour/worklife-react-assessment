import { METHODS } from "../../utils/constants/redux.constants";
import { SERVICE_URL } from "../../utils/constants/url.constants";
import { AppClient } from "../../utils/network";

// Function to fetch reminders
export const getRemindersService = () => {
  return AppClient({
    url: SERVICE_URL.GET_REMINDERS,
    method: METHODS.GET,
  });
};

// Function to add a reminder
export const addRemindersService = (data) => {
  return AppClient({
    url: SERVICE_URL.ADD_REMINDER,
    method: METHODS.POST,
    data,
  });
};

// Function to fetch user-specific reminders
export const getUserRemindersService = () => {
  return AppClient({
    url: SERVICE_URL.GET_USER_REMINDERS,
    method: METHODS.GET,
  });
};
