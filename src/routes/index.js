import { useRoutes } from "react-router-dom";
import { mainRoutes } from "./main.routes";
import { authRoutes } from "./auth.routes";
import { AppInstance } from "../App";

export const Routes = ({ token }) => {
  AppInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return useRoutes(token ? mainRoutes : authRoutes);
};
