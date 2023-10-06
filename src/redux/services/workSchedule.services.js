import { METHODS } from "../../utils/constants/redux.constants";
import { SERVICE_URL } from "../../utils/constants/url.constants";
import { AppClient } from "../../utils/network";

export const getWorkScheduleService = () => {
  return AppClient({
    url: SERVICE_URL.WORK,
    method: METHODS.GET,
  });
};

export const updateWorkScheduleService = (data) => {
  return AppClient({
    url: SERVICE_URL.WORK + `/${data._id}`,
    method: METHODS.PATCH,
    data,
  });
};
