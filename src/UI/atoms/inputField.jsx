import TextField from "@mui/material/TextField";

export const InputField = (props) => {
  const { id, label, value, required, errortext, error, name, ...restProps } =
    props;
  return (
    <TextField
      id={id}
      label={label}
      color="primary"
      margin="none"
      size="small"
      value={value}
      required={required}
      fullWidth
      error={error}
      helperText={errortext}
      name={name}
      {...restProps}
    />
  );
};
