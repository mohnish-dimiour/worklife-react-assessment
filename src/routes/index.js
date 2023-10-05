import { useRoutes } from "react-router-dom";
import { mainRoutes } from "./main.routes";
import { authRoutes } from "./auth.routes";

export const Routes = ({ token }) => {
  return useRoutes(token ? mainRoutes : authRoutes);
};
