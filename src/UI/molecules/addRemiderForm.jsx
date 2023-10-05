import React from "react";
import { RegisterContext } from "../../utils/contexts";
import { Stack } from "@mui/material";
import {
  ButtonAtom,
  DateTimePickerAtom,
  InputField,
  SelectAtom,
} from "../atoms";

export function AddRemiderForm() {
  const { handleBlur, handleChange, handleSubmit } =
    React.useContext(RegisterContext);
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Stack spacing={1.5}>
        <Stack direction="row" spacing={1}>
          <InputField
            lable={"Reminder"}
            name={"reminder"}
            id={"reminder"}
            onBlur={handleBlur}
            onChange={handleChange}
            required={true}
          />
          <SelectAtom
            label={"Type"}
            arr={["Health & Activity", "Family & Friends", "Work"]}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <DateTimePickerAtom label={"Start"} />
          <DateTimePickerAtom label={"End"} />
        </Stack>
        <Stack direction="row" spacing={1}>
          <InputField
            lable={"Frequency"}
            name={"frequency"}
            type={"email"}
            id={"frequency"}
            onBlur={handleBlur}
            onChange={handleChange}
            required={true}
          />
          <InputField
            lable={"Count"}
            name={"count"}
            type={"password"}
            onBlur={handleBlur}
            onChange={handleChange}
            id={"count"}
            required={true}
          />
        </Stack>
      </Stack>
      <ButtonAtom sx={{ mt: 3 }} color={"secondary"} type="submit">
        Add
      </ButtonAtom>
    </form>
  );
}
