import React from "react";
import { CardStatsWithAreaChart } from "./";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { Box, Divider, Stack, Typography, alpha, lighten } from "@mui/material";
import { grey } from "@mui/material/colors";
import { IconButtonAtom } from "../atoms";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export function WorkScheduleCard() {
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
            Work Schedule
          </Typography>
          <IconButtonAtom aria-label="delete">
            <MoreVertIcon sx={{ color: grey[400] }} size={"small"} />
          </IconButtonAtom>
        </Stack>
        <CardStatsWithAreaChart
          stats="10%"
          chartColor="success"
          avatarColor="success"
          title="Work Improvement"
          avatarIcon="tabler:credit-card"
          chartSeries={[{ data: [6, 35, 25, 61, 32, 84, 70] }]}
          sx={{
            boxShadow: "none",
            background: (theme) => lighten(theme.palette.primary.light, 0.8),
          }}
        />
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
              <Typography sx={{ color: "text.secondary" }}>Start</Typography>
            </Box>
            <Typography variant="h5">7:36 pm</Typography>
          </Box>
          <Divider flexItem sx={{ m: 0 }} orientation="vertical">
            <IconButtonAtom
              sx={{
                background: (theme) => lighten(theme.palette.info.main, 0.9),
                m: 0,
              }}
              aria-label="delete"
            >
              <AccessTimeRoundedIcon
                sx={{
                  color: (theme) => lighten(theme.palette.info.light, 0.2),
                }}
              />
            </IconButtonAtom>
          </Divider>
          <Box
            sx={{
              py: 1,
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <Box sx={{ mb: 0, display: "flex", alignItems: "center" }}>
              <Typography sx={{ mr: 0.5, color: "text.secondary" }}>
                End
              </Typography>
            </Box>
            <Typography variant="h5">8:40 pm</Typography>
          </Box>
        </Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography sx={{ mr: 0.5, color: "text.secondary" }}>
            Job Type :
          </Typography>
          <Typography
            sx={{
              mr: 0.5,
              py: 0.5,
              px: 2,
              borderRadius: 1.2,
              background: (theme) => alpha(theme.palette.error.light, 0.3),
            }}
          >
            Urgent
          </Typography>
        </Stack>
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
              <Typography sx={{ color: "text.secondary" }}>
                Lunch Start
              </Typography>
            </Box>
            <Typography variant="h5">7:36 pm</Typography>
          </Box>
          <Divider flexItem sx={{ m: 0 }} orientation="vertical">
            <IconButtonAtom
              sx={{
                background: (theme) => lighten(theme.palette.info.main, 0.9),
                m: 0,
              }}
              aria-label="delete"
            >
              <AccessTimeRoundedIcon
                sx={{
                  color: (theme) => lighten(theme.palette.info.light, 0.2),
                }}
              />
            </IconButtonAtom>
          </Divider>
          <Box
            sx={{
              py: 1,
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <Box sx={{ mb: 0, display: "flex", alignItems: "center" }}>
              <Typography sx={{ mr: 0.5, color: "text.secondary" }}>
                Lunch End
              </Typography>
            </Box>
            <Typography variant="h5">8:40 pm</Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
