import React, { useContext } from "react";
import { DashboardContext } from "../../../utils/contexts";
import { Box, Stack } from "@mui/material";
import {
  AddReminderDialog,
  MotivationSlider,
  WorkScheduleCard,
  WorkScheduleDialog,
} from "../../molecules";
import "./style.css";
import { ReminderCard } from "../../molecules";

const DashboardTemplate = () => {
  const { open, workDialogOpen, handleClose } = useContext(DashboardContext);

  return (
    <>
      {/* Render Add Reminder and Work Schedule Dialogs */}
      <AddReminderDialog {...{ open, handleClose }} />
      <WorkScheduleDialog {...{ workDialogOpen, handleClose }} />

      <Stack spacing={2} sx={{ my: 4, width: "100%" }}>
        {/* Horizontal Stack for WorkScheduleCard and ReminderCard */}
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          sx={{ width: "100%" }}
        >
          <WorkScheduleCard />
          <ReminderCard />
        </Stack>
      </Stack>

      <Box sx={{ mx: 3 }}>
        {/* Render the MotivationSlider */}
        <MotivationSlider />
      </Box>
    </>
  );
};

export default DashboardTemplate;
