import React from "react";
import { LoginTemplate } from "../templates";
import { LoginContext } from "../../utils/contexts";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginAsyncThunk } from "../../redux/asyncThunk";
import { toast } from "react-hot-toast";

// Form Validation
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .max(255)
    .required("Email is required")
    .email("Email must be valid"),
  password: Yup.string().max(255).required("Password is required"),
});

export const Login = () => {
  //---------------------Hooks------------------//
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleLogin({ ...values });
    },
  });

  //---------------------Variables------------------//
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    formik;

  //---------------------Functions------------------//
  const handleLogin = async (payload) => {
    const loginToast = toast.loading("Logging...");
    dispatch(loginAsyncThunk(payload))
      .unwrap()
      .then((res) => {
        toast.success("Logged in Successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err?.response?.data?.error || err?.message || "Something went wrong"
        );
      })
      .finally(() => {
        toast.dismiss(loginToast);
      });
  };

  //---------------------Context------------------//
  const loginContextValue = {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
  };

  return (
    <LoginContext.Provider value={loginContextValue}>
      <LoginTemplate />
    </LoginContext.Provider>
  );
};
