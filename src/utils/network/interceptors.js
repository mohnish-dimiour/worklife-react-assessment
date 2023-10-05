
import { AppInstance, AuthInstance } from "../../App";


AuthInstance.interceptors.request(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
  }
);

AuthInstance.interceptors.response(
  ((res) => {
  },
  (err) => {
    console.log(err);
  })
);

AppInstance.interceptors.request(
  (config) => {
    console.log(config);
    return config;
  },
  (err) => {
    console.log(err);
  }
);

AppInstance.interceptors.response(
  ((res) => {
    console.log(res);
    return res.data;
  },
  (err) => {
    console.log(err);
  })
);
