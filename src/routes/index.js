import { useRoutes } from "react-router-dom";
import { mainRoutes } from "./main.routes";
import { authRoutes } from "./auth.routes";
import { AppInstance } from "../App";

export const Routes = ({ token }) => {
  // authorization header with the token if it exists
  if (token) {
    AppInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  // routes based on the presence of a token
  return useRoutes(token ? mainRoutes : authRoutes);
};
