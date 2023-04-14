import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/userSlice";
import { registerSchema } from "./registerSchema";

const Register = () => {
  let users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(users);
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
          }, 1000);
          dispatch(registerUser(values));
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
