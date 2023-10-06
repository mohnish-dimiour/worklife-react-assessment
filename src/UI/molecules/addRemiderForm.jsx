import React from "react";
import { DashboardContext } from "../../utils/contexts";
import { Stack } from "@mui/material";
import {
  ButtonAtom,
  DateTimePickerAtom,
  InputField,
  SelectAtom,
} from "../atoms";

export function AddRemiderForm() {
  const { reminderListSelectArr, addReminderFormik } =
    React.useContext(DashboardContext);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    values,
    setFieldValue,
  } = addReminderFormik;

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Stack spacing={1.5}>
        <Stack direction="row" spacing={1}>
          <SelectAtom
            label={"Reminder"}
            name={"reminderId"}
            arr={reminderListSelectArr}
            required={true}
            value={values.reminderId}
            onChange={handleChange}
            errortext={touched.reminderId && errors.reminderId}
            error={Boolean(errors.reminderId && touched.reminderId)}
          />
          <SelectAtom
            label={"Status"}
            name={"status"}
            arr={[
              {
                label: "Active",
                value: "active",
              },
              {
                label: "Inactive",
                value: "inactive",
              },
            ]}
            onBlur={handleBlur}
            value={values.status}
            onChange={handleChange}
            errortext={touched.status && errors.status}
            error={Boolean(errors.status && touched.status)}
            required={true}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <DateTimePickerAtom
            name={"startDate"}
            label={"Start"}
            onBlur={handleBlur}
            value={values.startDate}
            onChange={(val) => {
              setFieldValue("startDate", val);
            }}
            errortext={touched.startDate && errors.startDate}
            error={Boolean(errors.startDate && touched.startDate)}
            required={true}
          />
          <DateTimePickerAtom
            name={"endDate"}
            label={"End"}
            onBlur={handleBlur}
            value={values.endDate}
            onChange={(val) => {
              setFieldValue("endDate", val);
            }}
            errortext={touched.endDate && errors.endDate}
            error={Boolean(errors.endDate && touched.endDate)}
            required={true}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <InputField
            lable={"Frequency"}
            name={"frequency"}
            type={"number"}
            id={"frequency"}
            onBlur={handleBlur}
            value={values.frequency}
            onChange={handleChange}
            errortext={touched.frequency && errors.frequency}
            error={Boolean(errors.frequency && touched.frequency)}
            required={true}
          />
          <InputField
            lable={"Count"}
            name={"count"}
            type={"number"}
            id={"count"}
            value={values.count}
            onChange={handleChange}
          />
        </Stack>
      </Stack>
      <ButtonAtom fullWidth sx={{ mt: 3 }} color={"secondary"} type="submit">
        Add
      </ButtonAtom>
    </form>
  );
}
