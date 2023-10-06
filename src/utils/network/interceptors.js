import { AppInstance, AuthInstance } from "../../App";

AuthInstance.interceptors.request(
  (config) => {
    return config;
  },
  (err) => {}
);

AuthInstance.interceptors.response(((res) => {}, (err) => {}));

AppInstance.interceptors.request(
  (config) => {
    return config;
  },
  (err) => {}
);

AppInstance.interceptors.response(
  ((res) => {
    return res.data;
  },
  (err) => {})
);
