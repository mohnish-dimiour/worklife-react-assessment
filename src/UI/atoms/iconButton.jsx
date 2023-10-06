import { IconButton } from "@mui/material";
import React from "react";

export const IconButtonAtom = (props) => {
  const { children, sx, ...restProps } = props;
  return (
    <IconButton aria-label="close" sx={sx} {...restProps}>
      {children}
    </IconButton>
  );
};
