import React, { useContext } from "react";
import { DashboardContext } from "../../../utils/contexts";
import { Box, Stack } from "@mui/material";
import {
  AddReminderDialog,
  MotivationSlider,
  WorkScheduleCard,
} from "../../molecules";
import "./style.css";
import { ReminderCard } from "../../molecules";

const DashboardTemplate = () => {
  const { open, handleClose } = useContext(DashboardContext);
  return (
    <>
      <AddReminderDialog {...{ open, handleClose }} />
      <Stack spacing={2} sx={{ my: 4, width: "100%" }}>
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
        <MotivationSlider />
      </Box>
    </>
  );
};

export default DashboardTemplate;
