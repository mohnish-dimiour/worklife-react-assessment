import Button from "@mui/material/Button";

export const ButtonAtom = (props) => {
  const {
    name,
    type,
    color,
    disabled,
    children,
    onClick,
    fullWidth,
    ...restProps
  } = props;
  return (
    <Button
      name={name}
      type={type}
      variant="contained"
      color={color}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
      {...restProps}
    >
      {children}
    </Button>
  );
};
