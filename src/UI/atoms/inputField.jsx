import TextField from "@mui/material/TextField";
export const InputField = (props) => {
  const { id, lable, value, required, errortext, error, name } = props;
  return (
    <TextField
      id={id}
      label={lable}
      color="primary"
      margin="none"
      size="small"
      value={value}
      required={required}
      fullWidth
      error={error}
      helperText={errortext}
      name={name}
      {...props}
    />
  );
};
