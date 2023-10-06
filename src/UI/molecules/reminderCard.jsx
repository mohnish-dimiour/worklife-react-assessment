import { Box, Stack, Typography, lighten } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useContext } from "react";
import { ButtonAtom } from "../atoms";
import { DashboardContext } from "../../utils/contexts";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { timeDiffToPresent } from "../../utils/helpers";

// ReminderCard component
export function ReminderCard() {
  // Accessing data and functions from the DashboardContext
  const { handleClickOpen, userReminderList } = useContext(DashboardContext);

  return (
    <Box
      sx={{
        background: "white",
        minWidth: "47%",
        px: 2,
        pb: 1,
        borderRadius: 1.2,
        maxHeight: 420,
        overflow: "auto",
      }}
    >
      <Stack>
        {/* Header section */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{
            py: 1,
            width: "100%",
            mb: 1,
            position: "sticky",
            top: 0,
            left: 0,
            background: "white",
          }}
          alignItems={"center"}
        >
          {/* Title for upcoming reminders */}
          <Typography sx={{ color: grey[800] }} variant={"h6"}>
            Upcoming Reminders
          </Typography>

          {/* Button to add a new reminder */}
          <ButtonAtom
            onClick={handleClickOpen}
            variant={"outlined"}
            color="info"
            startIcon={<AddRoundedIcon />}
            disableElevation
          >
            Add Reminder
          </ButtonAtom>
        </Stack>

        {/* List of user's reminders */}
        <Stack spacing={0.8}>
          {userReminderList.map((item, ind) => {
            // Background color for reminder based on index
            let backgroundColor = (theme) =>
              lighten(theme.palette.error.main, 0.7);
            if (ind % 3 === 0) {
              backgroundColor = (theme) =>
                lighten(theme.palette.error.main, 0.7);
            } else if (ind % 3 === 1) {
              backgroundColor = (theme) =>
                lighten(theme.palette.info.main, 0.7);
            } else if (ind % 3 === 2) {
              backgroundColor = (theme) =>
                lighten(theme.palette.success.main, 0.7);
            }
            return (
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                sx={{ background: grey[200], px: 2, py: 1, borderRadius: 1 }}
              >
                <Box>
                  {/* reminder title */}
                  <Box
                    component="span"
                    sx={{
                      px: 0.6,
                      py: 0.4,
                      borderRadius: 0.8,
                      fontSize: "12px",
                      color: grey[600],
                      background: backgroundColor,
                    }}
                  >
                    {item?.reminderId?.title}
                  </Box>
                  {/* reminder description */}
                  <Typography
                    sx={{
                      color: grey[700],
                      fontSize: 18,
                    }}
                    variant="h6"
                    color="initial"
                  >
                    {item?.reminderId?.description}
                  </Typography>
                </Box>
                <Box>
                  {/* time difference to present */}
                  <Box
                    sx={{
                      fontSize: "12px",
                      color: grey[600],
                    }}
                  >
                    {timeDiffToPresent(new Date(item?.startDate))}
                  </Box>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
