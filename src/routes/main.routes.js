import { Navigate } from "react-router-dom";
import { Dashboard } from "../UI/pages";
import MainLayout from "./MainLayout";

export const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];
