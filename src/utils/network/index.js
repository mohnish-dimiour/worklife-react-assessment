import { AppInstance, AuthInstance } from "../../App";
// Authentication client for making HTTP requests with AuthInstance
export const AuthClient = ({
  url,
  method,
  data = {},
  params = {},
  headers = {},
}) => {
  return new Promise((resolve, reject) => {
    AuthInstance.request({ url, method, data, headers, params })
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

// Application client for making HTTP requests with AppInstance
export const AppClient = ({
  url,
  method,
  data = {},
  params = {},
  headers = {},
}) => {
  return AppInstance.request({ url, method, data, headers, params });
};
