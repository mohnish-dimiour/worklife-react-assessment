import { AppInstance, AuthInstance } from "../../App";

// Request interceptor for AuthInstance
AuthInstance.interceptors.request.use(
  (config) => {
    // Add any request logic here if needed
    return config;
  },
  (err) => {
    // Handle request error here if needed
    return Promise.reject(err);
  }
);

// Response interceptor for AuthInstance
AuthInstance.interceptors.response.use(
  (res) => {
    // Add response logic here if needed
    return res;
  },
  (err) => {
    // Handle response error here if needed
    return Promise.reject(err);
  }
);

// Request interceptor for AppInstance
AppInstance.interceptors.request.use(
  (config) => {
    // Add any request logic here if needed
    return config;
  },
  (err) => {
    // Handle request error here if needed
    return Promise.reject(err);
  }
);

// Response interceptor for AppInstance
AppInstance.interceptors.response.use(
  (res) => {
    // Add response logic here if needed
    return res.data; // This line indicates that the response data is returned
  },
  (err) => {
    // Handle response error here if needed
    return Promise.reject(err);
  }
);
