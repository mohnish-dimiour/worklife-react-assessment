import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export function SelectAtom(props) {
  const { arr, label } = props;
  return (
    <FormControl size={"small"} fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
      >
        {arr.map((item) => {
          return <MenuItem value={item}>{item}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
