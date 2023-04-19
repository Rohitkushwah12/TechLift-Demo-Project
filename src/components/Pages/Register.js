import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { registerUser } from "../../store/userSlice";
import { registerSchema } from "../ValidationSchema/registerSchema";
import "../bootstrap/css/bootstrap.css";
import InputField from "../InputField/InputField";
import { Eye, EyeSlash } from "react-bootstrap-icons";

const initialValues = {
  name: "",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsAndCondition: false,
};

const Register = () => {
  const [visible, setVisibility] = useState(false);

  const togglePassword = () => {
    setVisibility(!visible);
  };
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                alert("user registered successfully");
              }, 1000);
              dispatch(registerUser(values));
            }}
          >
            {({ isSubmitting }) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Register Form</h1>
                  </div>
                </div>
                <Form>
                  <InputField
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="Enter Name"
                  />
                  <InputField
                    type="text"
                    name="mobile"
                    label="Mobile"
                    placeholder="Enter
                  Mobile Number"
                  />
                  <InputField
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Enter Email Address"
                  />
                  <InputField
                    type={visible ? "text" : "password"}
                    name="password"
                    label="Password"
                    placeholder="Enter Password"
                  />
                  <button
                    type="button"
                    style={{ border: "none" }}
                    onClick={togglePassword}
                  >
                    {visible ? <EyeSlash /> : <Eye />}
                  </button>
                  <InputField
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Enter Password again"
                  />
                  <InputField
                    type="checkbox"
                    name="termsAndCondition"
                    label="Terms and Conditions"
                  />
                  <button
                    className="btn btn-primary  mt-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Register"}
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
