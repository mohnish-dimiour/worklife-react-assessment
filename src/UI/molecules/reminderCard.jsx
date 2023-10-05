import { Box, Stack, Typography, lighten } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useContext } from "react";
import { IconButtonAtom } from "../atoms";
import { DashboardContext } from "../../utils/contexts";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export function ReminderCard() {
  const { handleClickOpen } = useContext(DashboardContext);
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
          sx={{ width: "100%" }}
          alignItems={"center"}
        >
          <Typography sx={{ color: grey[800] }} variant={"h6"}>
            Upcoming Reminders
          </Typography>
          <IconButtonAtom onClick={handleClickOpen} aria-label="delete">
            <MoreVertIcon sx={{ color: grey[400] }} size={"small"} />
          </IconButtonAtom>
        </Stack>
        <Stack spacing={0.8}>
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
                  background: (theme) =>
                    lighten(theme.palette.success.main, 0.4),
                }}
              >
                Health & Activity
              </Box>
              <Typography
                sx={{
                  color: grey[700],
                  fontSize: 18,
                }}
                variant="h6"
                color="initial"
              >
                Drink Water
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
                  background: (theme) => lighten(theme.palette.error.main, 0.7),
                }}
              >
                Family & Friends
              </Box>
              <Typography
                sx={{
                  color: grey[700],
                  fontSize: 18,
                }}
                variant="h6"
                color="initial"
              >
                Dinner With Parents
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
                  background: (theme) => lighten(theme.palette.info.main, 0.7),
                }}
              >
                Work
              </Box>
              <Typography
                sx={{
                  color: grey[700],
                  fontSize: 18,
                }}
                variant="h6"
                color="initial"
              >
                Dinner With Parents
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
                  background: (theme) => lighten(theme.palette.info.main, 0.7),
                }}
              >
                Work
              </Box>
              <Typography
                sx={{
                  color: grey[700],
                  fontSize: 18,
                }}
                variant="h6"
                color="initial"
              >
                Dinner With Parents
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
                  background: (theme) => lighten(theme.palette.error.main, 0.7),
                }}
              >
                Family & Friends
              </Box>
              <Typography
                sx={{
                  color: grey[700],
                  fontSize: 18,
                }}
                variant="h6"
                color="initial"
              >
                Dinner With Parents
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
        </Stack>
      </Stack>
    </Box>
  );
}
