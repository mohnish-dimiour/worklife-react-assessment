import { METHODS } from "../../utils/constants/redux.constants";
import { SERVICE_URL } from "../../utils/constants/url.constants";
import { AppClient } from "../../utils/network";

export const getRemindersService = () => {
  return AppClient({
    url: SERVICE_URL.GET_REMINDERS,
    method: METHODS.GET,
  });
};

export const addRemindersService = (data) => {
  return AppClient({
    url: SERVICE_URL.ADD_REMINDER,
    method: METHODS.POST,
    data,
  });
};

export const getUserRemindersService = () => {
  return AppClient({
    url: SERVICE_URL.GET_REMINDERS,
    method: METHODS.GET,
  });
};
