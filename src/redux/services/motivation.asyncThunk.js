import { METHODS } from "../../utils/constants/redux.constants";
import { SERVICE_URL } from "../../utils/constants/url.constants";
import { AppClient } from "../../utils/network";

// Function for making an API request to fetch motivation data
export const motivationService = (data) => {
  return AppClient({
    url: SERVICE_URL.MOTIVATION,
    method: METHODS.GET,
  });
};
