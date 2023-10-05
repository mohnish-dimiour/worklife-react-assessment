import { IconButton } from "@mui/material";
import React from "react";

export const IconButtonAtom = (props) => {
  const { children, sx } = props;
  return (
    <IconButton aria-label="close" sx={sx} {...props}>
      {children}
    </IconButton>
  );
};
