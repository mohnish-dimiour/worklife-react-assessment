import * as React from "react";
import { lighten, styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/material";
import { IconButtonAtom } from "../atoms";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import { WorkScheduleForm } from ".";

// Styled Dialog component
const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export function WorkScheduleDialog({ workDialogOpen, handleClose }) {
  return (
    <div>
      <CustomDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={workDialogOpen}
        sx={{ minWidth: 300 }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <Stack direction="row" spacing={1}>
            {/* Icon for indicating editing */}
            <Stack
              sx={{
                background: (theme) => lighten(theme.palette.info.light, 0.8),
                borderRadius: "3px !important",
                padding: "3px !important",
              }}
              aria-label="delete"
            >
              <EditNoteRoundedIcon
                sx={{ color: (theme) => theme.palette.info.main }}
              />
            </Stack>
            {/* Title */}
            <Stack>Work Schedule</Stack>
          </Stack>
        </DialogTitle>
        {/* Close button */}
        <IconButtonAtom
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButtonAtom>
        {/* Content area */}
        <DialogContent sx={{ minWidth: 500 }} dividers>
          <WorkScheduleForm />
        </DialogContent>
      </CustomDialog>
    </div>
  );
}
