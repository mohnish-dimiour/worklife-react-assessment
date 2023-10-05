import React, { useState } from "react";
import { DashboardTemplate } from "../templates";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth.slice";
import { DashboardContext } from "../../utils/contexts";

export const Dashboard = () => {
  //---------------------Hooks------------------//
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  //---------------------Functions------------------//
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //---------------------Context------------------//
  const dashboardContextValue = {
    open,
    setOpen,
    handleClickOpen,
    handleClose,
  };

  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <DashboardTemplate />
    </DashboardContext.Provider>
  );
};
