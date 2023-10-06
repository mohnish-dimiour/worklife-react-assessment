import { METHODS } from "../../utils/constants/redux.constants";
import { SERVICE_URL } from "../../utils/constants/url.constants";
import { AuthClient } from "../../utils/network";

// Function for making a login API request
export const loginServices = (data) => {
  return AuthClient({
    url: SERVICE_URL.LOGIN,
    method: METHODS.POST,
    data,
  });
};

// Function for making a registration API request
export const registerServices = (data) => {
  return AuthClient({
    url: SERVICE_URL.REGISTER,
    method: METHODS.POST,
    data,
  });
};
