import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

export function SelectAtom(props) {
  const { arr, label, error, errortext, required } = props;
  return (
    <FormControl required={required} size={"small"} fullWidth error={error}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        {...props}
      >
        {arr.map((item, ind) => {
          return (
            <MenuItem key={ind} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{errortext}</FormHelperText>
    </FormControl>
  );
}
