import { Navigate } from "react-router-dom";
import { Login, Register } from "../UI/pages";
import { AuthLayout } from "../layout/auth.layout";

export const authRoutes = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];
