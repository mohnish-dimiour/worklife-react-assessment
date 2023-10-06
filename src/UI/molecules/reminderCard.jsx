import { Box, Stack, Typography, lighten } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useContext } from "react";
import { ButtonAtom, IconButtonAtom } from "../atoms";
import { DashboardContext } from "../../utils/contexts";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export function ReminderCard() {
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
          <Typography sx={{ color: grey[800] }} variant={"h6"}>
            Upcoming Reminders
          </Typography>

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
        <Stack spacing={0.8}>
          {userReminderList.map((item) => {
            const a = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            let backgroundColor = (theme) =>
              lighten(theme.palette.error.main, 0.7);
            if (a === 1) {
              backgroundColor = (theme) =>
                lighten(theme.palette.error.main, 0.7);
            } else if (a === 2) {
              backgroundColor = (theme) =>
                lighten(theme.palette.info.main, 0.7);
            } else if (a === 3) {
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
                    {item.title}
                  </Box>
                  <Typography
                    sx={{
                      color: grey[700],
                      fontSize: 18,
                    }}
                    variant="h6"
                    color="initial"
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box>
                  <Box
                    sx={{
                      fontSize: "12px",
                      color: grey[600],
                    }}
                  >
                    2 mins
                  </Box>
                  <Stack justifyContent={"flex-end"} alignItems={"flex-end"}>
                    <CloseRoundedIcon sx={{ color: grey[800] }} />
                  </Stack>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
