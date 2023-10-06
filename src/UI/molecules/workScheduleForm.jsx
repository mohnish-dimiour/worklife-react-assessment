import React from "react";
import { DashboardContext } from "../../utils/contexts";
import { Stack } from "@mui/material";
import { ButtonAtom, InputField, TimePickerAtom } from "../atoms";

export function WorkScheduleForm() {
  const { workScheduleFormik } = React.useContext(DashboardContext);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    values,
    setFieldValue,
  } = workScheduleFormik;

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Stack spacing={1.5}>
        <Stack direction="row" spacing={1}>
          <InputField
            lable={"Job Type"}
            name={"jobType"}
            type={"text"}
            id={"jobtype"}
            onBlur={handleBlur}
            value={values.jobType}
            onChange={handleChange}
            errortext={touched.jobType && errors.jobType}
            error={Boolean(errors.jobType && touched.jobType)}
            required={true}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <TimePickerAtom
            name={"startTime"}
            label={"Start Time"}
            onBlur={handleBlur}
            value={values.startTime}
            onChange={(val) => {
              setFieldValue("startTime", val);
            }}
            errortext={touched.startTime && errors.startTime}
            error={Boolean(errors.startTime && touched.startTime)}
            required={true}
          />
          <TimePickerAtom
            name={"endTime"}
            label={"End Time"}
            onBlur={handleBlur}
            value={values.endTime}
            onChange={(val) => {
              setFieldValue("endTime", val);
            }}
            errortext={touched.endTime && errors.endTime}
            error={Boolean(errors.endTime && touched.endTime)}
            required={true}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <TimePickerAtom
            name={"lunchStartTime"}
            label={"Lunch Start"}
            onBlur={handleBlur}
            value={values.lunchStartTime}
            onChange={(val) => {
              setFieldValue("lunchStartTime", val);
            }}
            errortext={touched.lunchStartTime && errors.lunchStartTime}
            error={Boolean(errors.lunchStartTime && touched.lunchStartTime)}
            required={true}
          />
          <TimePickerAtom
            name={"lunchEndTime"}
            label={"Lunch End"}
            onBlur={handleBlur}
            value={values.lunchEndTime}
            onChange={(val) => {
              setFieldValue("lunchEndTime", val);
            }}
            errortext={touched.lunchEndTime && errors.lunchEndTime}
            error={Boolean(errors.lunchEndTime && touched.lunchEndTime)}
            required={true}
          />
        </Stack>
      </Stack>
      <ButtonAtom fullWidth sx={{ mt: 3 }} color={"secondary"} type="submit">
        Update Work Schedule
      </ButtonAtom>
    </form>
  );
}
