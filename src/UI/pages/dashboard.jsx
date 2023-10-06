import React, { useEffect, useState } from "react";
import { DashboardTemplate } from "../templates";
import { DashboardContext } from "../../utils/contexts";
import { useDispatch, useSelector } from "react-redux";
import {
  addReminderAsyncThunk,
  getRemindersAsyncThunk,
  getUserRemindersAsyncThunk,
} from "../../redux/asyncThunk/reminder.asyncThunk";
import * as Yup from "yup";
import { useFormik } from "formik/dist";
import { toast } from "react-hot-toast";
import {
  getMotivationAsyncThunk,
  getWorkScheduleAsyncThunk,
  updateWorkScheduleAsyncThunk,
} from "../../redux/asyncThunk";
import { socket } from "../../layout/MainLayout";

export const Dashboard = () => {
  //---------------------Hooks------------------//
  const [open, setOpen] = useState(false);
  const [workDialogOpen, setWorkDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const { reminderList, userReminderList } = useSelector(
    (state) => state.reminder
  );
  const { workSchedule } = useSelector((state) => state.work);
  const [motivationList, setMotivationList] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const addReminderFormik = useFormik({
    initialValues: {
      reminderId: "",
      status: "",
      startDate: null,
      endDate: null,
      frequency: "",
      count: null,
    },
    validationSchema: addReminderValidationSchema,
    onSubmit: (values) => {
      values.startDate = values.startDate
        ? new Date(values.startDate?.$d).toISOString()
        : "";
      values.endDate = values.startDate
        ? new Date(values.endDate?.$d).toISOString()
        : "";
      values.userId = user._id;
      handleAddReminder({ ...values });
    },
  });

  const workScheduleFormik = useFormik({
    initialValues: {
      jobType: "",
      startTime: null,
      endTime: null,
      lunchStartTime: null,
      lunchEndTime: null,
    },
    validationSchema: workScheduleValidationSchema,
    onSubmit: (values) => {
      values._id = workSchedule[0]?._id;
      values.userId = user._id;
      values.startTime = values.startTime?.$d.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      values.endTime = values.endTime?.$d.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      values.lunchStartTime = values.lunchStartTime?.$d.toLocaleString(
        "en-US",
        {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );
      values.lunchEndTime = values.lunchEndTime?.$d.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      handleWorkSchedule({ ...values });
    },
  });

  //---------------------Use Effects------------------//
  useEffect(() => {
    dispatch(getRemindersAsyncThunk());
    dispatch(getUserRemindersAsyncThunk());
    dispatch(getWorkScheduleAsyncThunk());
    dispatch(getMotivationAsyncThunk())
      .unwrap()
      .then((res) => setMotivationList(res.data))
      .catch(() => {});
    // eslint-disable-next-line
  }, []);

  //---------------------Variables------------------//
  const reminderListSelectArr = reminderList.map((item) => {
    return {
      label: item.title,
      value: item._id,
    };
  });

  //---------------------Functions------------------//
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleWorkDialogOpen = () => {
    setWorkDialogOpen(true);
  };
  const handleClose = () => {
    addReminderFormik.resetForm();
    workScheduleFormik.resetForm();
    setOpen(false);
    setWorkDialogOpen(false);
  };
  const handleWorkSchedule = (payload) => {
    const loginToast = toast.loading("Updating...");
    dispatch(updateWorkScheduleAsyncThunk(payload))
      .unwrap()
      .then((res) => {
        toast.success("Work schedule updated successfully!");
        handleClose();
        dispatch(getWorkScheduleAsyncThunk());
      })
      .catch((err) => {
        toast.error(
          err?.response?.data?.error || err?.message || "Something went wrong"
        );
      })
      .finally(() => {
        toast.dismiss(loginToast);
      });
  };
  const handleAddReminder = (payload) => {
    const loginToast = toast.loading("Creating...");
    dispatch(addReminderAsyncThunk(payload))
      .unwrap()
      .then((res) => {
        handleClose();
        dispatch(getUserRemindersAsyncThunk());
        toast.success("Reminder created successfully!");
        socket.emit("scheduleMessage", {
          startDate : payload.startDate,
          endDate : payload.endDate,
          workStartTime : 11,
          count : payload.count, 
          frequency : payload.frequency,
          reminder : reminderList.filter(o=>o._id === payload.reminderId)[0],
          userId  : payload.userId
        });
      })
      .catch((err) => {
        toast.error(
          err?.response?.data?.error || err?.message || "Something went wrong"
        );
      })
      .finally(() => {
        toast.dismiss(loginToast);
      });
  };

  //---------------------Context------------------//
  const dashboardContextValue = {
    open,
    setOpen,
    workDialogOpen,
    handleClickOpen,
    handleWorkDialogOpen,
    handleClose,
    reminderListSelectArr,
    addReminderFormik,
    workScheduleFormik,
    userReminderList,
    motivationList,
    workSchedule,
  };

  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <DashboardTemplate />
    </DashboardContext.Provider>
  );
};

// Validation Schemas
const addReminderValidationSchema = Yup.object().shape({
  reminderId: Yup.string().required("Reminder is required"),
  status: Yup.string().max(255).required("Status is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().required("End date is required"),
  frequency: Yup.number().required("Frequency is required"),
});

const workScheduleValidationSchema = Yup.object().shape({
  jobType: Yup.string().required("Job Type is required"),
  startTime: Yup.date().required("Start time is required"),
  endTime: Yup.date().required("End time is required"),
  lunchEndTime: Yup.date().required("Lunch end time is required"),
  lunchStartTime: Yup.date().required("Lunch start time is required"),
});
