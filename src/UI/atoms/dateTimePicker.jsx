import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField } from "@mui/material";

export const DateTimePickerAtom = (props) => {
  const { label, error, errortext, required, ...restProps } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        slotProps={{
          textField: {
            size: "small",
            error,
            helperText: errortext,
            required,
          },
        }}
        label={label}
        renderInput={() => <TextField error={error} helperText={errortext} />}
        {...restProps}
      />
    </LocalizationProvider>
  );
};
