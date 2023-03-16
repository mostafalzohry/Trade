

import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { redirect } from 'react-router-dom';
import { login } from "../../store/actions/auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

 const Login = (props) => {

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [successful, setSuccessful] = useState(false);


  const dispatch = useDispatch();
  
  const validate = Yup.object({

    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),

   
  })

  const handleLogin = (e) => {

    setLoading(true);
      dispatch(login(e.email, e.password))
      .then(() => {
        setSuccessful(true)
        props.history.push("/");
        window.location.reload();

      })
      alert("sucess")
  
      
  };

  if (successful) {
      return <Navigate replace to="/" />;
   
    }
  return (
    <>
    <Formik
      initialValues={{
         
        email: '',
        password: '',
     
      }}
      validationSchema={validate}
      onSubmit={handleLogin}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Login</h1>
          <Form>
          

            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
           
            <button className="btn btn-success mt-3 me-3 btnn" type="submit" disabled={!formik.isValid}>login</button>
          </Form>
        </div>
      )}
    </Formik>
    <ToastContainer />
    </>
  )
}
export default Login