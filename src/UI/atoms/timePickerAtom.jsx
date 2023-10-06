import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import React from "react";

export function TimePickerAtom(props) {
  const { label, onChange, error, errortext, required } = props;
  return (
    <TimePicker
      label={label}
      onChange={onChange}
      slotProps={{
        textField: {
          size: "small",
          error: error,
          helperText: errortext,
          required: { required },
        },
      }}
      {...props}
    />
  );
}
