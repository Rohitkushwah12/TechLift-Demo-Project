import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

require("yup-phone");

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "First Name must be 2 characters or long")
    .required("First Name required"),
  mobile: Yup.string()
    .required("Mobile number required")
    .matches(/^(?=.*[0-9])/, "please enter valid mobile number"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters or long")
    .required("Password required")
    .matches(/^(?=.*[a-z])/, "must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "must contain at least one number")
    .matches(
      /^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/,
      "must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  termsAndCondition: Yup.boolean().isTrue("please agree to terms & conditions"),
});

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          mobile: "",
          email: "",
          password: "",
          confirmPassword: "",
          termsAndCondition: false,
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          setTimeout(() => {
            alert("user registered successfully");
          }, 10000);
          console.log(values);
          const oldUsers = JSON.parse(localStorage.getItem("users") || "[]");
          oldUsers.push(values);
          localStorage.setItem("users", JSON.stringify(oldUsers));
        }}
      >
        <div
          style={{
            width: "500px",
            backgroundColor: "#f5f5f5",
            margin: "auto",
            height: "400px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Form style={{ width: "90%", margin: "auto" }}>
            <div>
              <h2>Register Form</h2>

              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Enter Name"
                style={{ width: "100%", padding: "5px" }}
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="mobile">Mobile Number</label>
              <Field
                type="text"
                name="mobile"
                placeholder="Enter Mobile Number"
                style={{ width: "100%", padding: "5px" }}
              />
              <ErrorMessage name="mobile" component="div" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter Email Address"
                style={{ width: "100%", padding: "5px" }}
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter Password"
                style={{ width: "100%", padding: "5px" }}
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Enter Password again"
                style={{ width: "100%", padding: "5px" }}
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <div>
              <Field type="checkbox" name="termsAndCondition" />
              <label htmlFor="termsAndCondition">Agree to T&C</label>
              <ErrorMessage name="termsAndCondition" component="div" />
            </div>
            <button
              className="btn btn-primary btn-block mt-4"
              type="submit"
              style={{ padding: "5px" }}
            >
              Register
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default Register;
