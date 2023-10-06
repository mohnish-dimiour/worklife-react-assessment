import React from "react";
import { RegisterTemplate } from "../templates";
import { RegisterContext } from "../../utils/contexts";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { registerAsyncThunk } from "../../redux/asyncThunk";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  //---------------------Hooks------------------//
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleRegister({ ...values });
    },
  });
  const navigate = useNavigate();

  //---------------------Variables------------------//
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    formik;

  //---------------------Functions------------------//
  const handleRegister = async (payload) => {
    dispatch(registerAsyncThunk(payload))
      .unwrap()
      .then((res) => {
        toast.success("Registered Successfully!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(
          err?.response?.data?.error || err?.message || "Something went wrong"
        );
      });
  };

  //---------------------Context------------------//
  const registerContextValue = {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
  };
  return (
    <RegisterContext.Provider value={registerContextValue}>
      <RegisterTemplate />
    </RegisterContext.Provider>
  );
};

// Validation Schemas
const validationSchema = Yup.object().shape({
  firstName: Yup.string().max(50).required("First Name is required"),
  lastName: Yup.string().max(50).required("Last Name is required"),
  email: Yup.string()
    .max(50)
    .required("Email is required")
    .email("Email must be valid"),
  password: Yup.string().max(50).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
