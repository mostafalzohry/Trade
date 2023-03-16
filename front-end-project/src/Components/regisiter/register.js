import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../store/actions/auth";

import { Navigate } from "react-router-dom";

const Register = (props) => {
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const validate = Yup.object({
    username: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(5, "must be more than 5")
      .matches(/^[A-Z]/, "must start with capital letter")

      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 charaters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),

    // phonenumber : Yup.number().matches(  /^(01[0-2]\d{1,8})/, "errrrrrrrrror")
    phonenumber: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "This isn't Valid Phone number")
      .required("ئضضضضضضضضض"),

    // Nationalid : Yup
    Nationalid: Yup.string()
      .matches(
        /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/,
        " this isn't a valid national if"
      )
      .required("ئضضضضضضضضض"),
  });

  const handleRegister = (e) => {
    setSuccessful(false);
    console.log(e.username);

    alert("sucess");
    dispatch(register(e.username, e.email, e.password)).then(() => {
      setSuccessful(true);
      props.history.push("/login");
      window.location.reload();
    });
  };

  if (successful) {
    return <Navigate replace to="/login" />;
  }
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
    
        }}
        validationSchema={validate}
        onSubmit={handleRegister}
      >
        {(formik) => (
          <div>
            <h1 className="h1text">Sigggn Up</h1>
            <Form>
              <TextField label="User Name" name="username" type="text" />

              <TextField label="Email" name="email" type="email" />

              <TextField label="Phone number" name="phonenumber" type="text" />

              <TextField
                label="your national id"
                name="Nationalid"
                type="text"
              />

              <TextField label="password" name="password" type="password" />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />

              <button
                className="Regisiterbtn"
                type="submit"
                disabled={!formik.isValid}
              >
                Regisiter
              </button>
              <button className="resetbtn" type="reset">
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};
export default Register;
