import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

export function SelectAtom(props) {
  const { arr, label, error, errortext, required, ...restProps } = props;
  return (
    <FormControl required={required} size={"small"} fullWidth error={error}>
      {/* Label */}
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        {...restProps}
      >
        {/* Looping from the select Options array */}
        {arr.map((item, ind) => {
          return (
            <MenuItem key={ind} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
      {/* For showing errors */}
      <FormHelperText>{errortext}</FormHelperText>
    </FormControl>
  );
}
