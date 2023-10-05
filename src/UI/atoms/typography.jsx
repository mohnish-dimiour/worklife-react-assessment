import React from "react";
import Typography from "@mui/material/Typography";

const TypographyAtom = (props) => {
  const { variant, children } = props;
  return (
    <Typography variant={variant} color="initial" {...props}>
      {children}
    </Typography>
  );
};

export default TypographyAtom;
