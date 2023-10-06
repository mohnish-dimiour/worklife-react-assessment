import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField } from "@mui/material";

export const DateTimePickerAtom = (props) => {
  const { label, error, errortext, required } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        slotProps={{
          textField: {
            size: "small",
            error: error,
            helperText: errortext,
            required: required,
          },
        }}
        label={label}
        renderInput={() => <TextField error={error} helperText={errortext} />}
        {...props}
      />
    </LocalizationProvider>
  );
};
