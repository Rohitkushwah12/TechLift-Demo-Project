import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/userSlice";
import { registerSchema } from "./registerSchema";
import "./bootstrap/css/bootstrap.css";
const Register = () => {
  let users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(users);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
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
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                alert("user registered successfully");
              }, 1000);
              dispatch(registerUser(values));
            }}
          >
            {({ touched, errors, values, isSubmitting }) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Register Form</h1>
                  </div>
                </div>
                <Form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className={`mt-2 form-control ${
                        touched.name && errors.name ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <Field
                      type="text"
                      name="mobile"
                      placeholder="Enter Mobile Number"
                      className={`mt-2 form-control ${
                        touched.mobile && errors.mobile ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      className={`mt-2 form-control ${
                        touched.email && errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className={`mt-2 form-control ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Enter Password again"
                      className={`mt-2 form-control ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-check">
                    <Field
                      type="checkbox"
                      name="termsAndCondition"
                      className="form-check-input"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Accept Terms & Conditions
                    </label>
                    <ErrorMessage name="termsAndCondition" component="div" />
                  </div>
                  <button
                    className="btn btn-primary btn-block mt-4"
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
