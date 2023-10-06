import React, { useContext } from "react";
import { Box, Stack, Typography, alpha, lighten } from "@mui/material";
import { grey } from "@mui/material/colors";
import { IconButtonAtom } from "../atoms";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottieFiles/work-schedule.json";
import { DashboardContext } from "../../utils/contexts";

export function WorkScheduleCard() {
  const { handleWorkDialogOpen, workSchedule } = useContext(DashboardContext);
  return (
    <Box
      sx={{
        background: "white",
        minWidth: "47%",
        px: 2,
        py: 1,
        borderRadius: 1.2,
      }}
    >
      <Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ width: "100%", mb: 2 }}
          alignItems={"center"}
        >
          <Typography sx={{ color: grey[800] }} variant={"h6"}>
            Work Schedule
          </Typography>
          <IconButtonAtom aria-label="delete">
            <MoreVertIcon
              onClick={handleWorkDialogOpen}
              sx={{ color: grey[400] }}
              size={"small"}
            />
          </IconButtonAtom>
        </Stack>
        <Box
          sx={{
            boxShadow: "none",
            background: (theme) => lighten(theme.palette.primary.light, 0.8),
          }}
        >
          <Lottie
            style={{ height: 180 }}
            animationData={loginAnimation}
            loop={true}
          />
        </Box>
        <Box
          sx={{
            my: 1,
            gap: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ py: 1, display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 0, display: "flex", alignItems: "center" }}>
              <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
                Work Start
              </Typography>
            </Box>
            <Typography variant="h6">
              {workSchedule[0]?.startTime || "9:52 AM"}
            </Typography>
          </Box>
          <Box sx={{ py: 1, display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 0, display: "flex", alignItems: "center" }}>
              <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
                Job Type
              </Typography>
            </Box>
            <Typography variant="h6">
              {workSchedule[0]?.jobType || "Full Time"}
            </Typography>
          </Box>
          <Box
            sx={{
              py: 1,
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <Box sx={{ mb: 0, display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ mr: 0.5, color: "text.secondary", fontSize: 13 }}
              >
                Lunch Start
              </Typography>
            </Box>
            <Typography variant="h6">
              {workSchedule[0]?.lunchStartTime || "5:00 PM"}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            my: 1,
            gap: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ py: 1, display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 0, display: "flex", alignItems: "center" }}>
              <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
                Work End
              </Typography>
            </Box>
            <Typography variant="h6">
              {workSchedule[0]?.endTime || "8:00 AM"}
            </Typography>
          </Box>
          <Box sx={{ py: 1, display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 0, display: "flex", alignItems: "center" }}>
              <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
                Work Timing
              </Typography>
            </Box>
            <Typography variant="h6">Mon - Fri</Typography>
          </Box>
          <Box
            sx={{
              py: 1,
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <Box sx={{ mb: 0, display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ mr: 0.5, color: "text.secondary", fontSize: 13 }}
              >
                Lunch End
              </Typography>
            </Box>
            <Typography variant="h6">
              {workSchedule[0]?.lunchEndTime || "5:45 PM"}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
