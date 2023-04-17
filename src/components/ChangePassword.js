import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { changePassword } from "../store/userSlice";

const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old Password required"),
  newPassword: Yup.string()
    .min(8, "Password must be 8 characters or long")
    .required("New Password required")
    .matches(/^(?=.*[a-z])/, "must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "must contain at least one number")
    .matches(
      /^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/,
      "must contain at least one special character"
    ),
  confirmNewPassword: Yup.string()
    .required("Confirm Password required")
    .oneOf([Yup.ref("newPassword"), null], "Password must match"),
});

const ChangePassword = () => {
  const authenticateChangePassword = (values) => {
    if (loginUser.password !== values.oldPassword) {
      console.log(values.oldPassword);
      alert("Please Enter Correct Old Password");
    } else {
      if (values.oldPassword === values.newPassword) {
        alert("Old Password and New password should not be same");
      } else {
        dispatch(
          changePassword({
            newPassword: values.newPassword,
            email: loginUser.email,
          })
        );
        alert("Password Updated SuccessFully");
      }
    }
  };

  const loginUser = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  console.log(loginUser);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              oldPassword: "",
              newPassword: "",
              confirmNewPassword: "",
            }}
            validationSchema={changePasswordSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              authenticateChangePassword(values);
            }}
          >
            {({ touched, values, errors, isSubmitting }) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Change Password</h1>
                  </div>
                </div>
                <Form>
                  <div className="form-group">
                    <lable htmlFor="oldPassword">Old Password</lable>
                    <Field
                      type="password"
                      name="oldPassword"
                      placeholder="Enter Old Password"
                      className={`mt-2 form-control ${
                        touched.oldPassword && errors.oldPassword
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="oldPassword"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <lable htmlFor="password">New Password</lable>
                    <Field
                      type="password"
                      name="newPassword"
                      placeholder="Enter New Password"
                      className={`mt-2 form-control ${
                        touched.newPassword && errors.newPassword
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="newPassword"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <lable htmlFor="confirmNewPassword">
                      Confirm New Password
                    </lable>
                    <Field
                      type="password"
                      name="confirmNewPassword"
                      placeholder="Enter New Password Again"
                      className={`mt-2 form-control ${
                        touched.confirmNewPassword && errors.confirmNewPassword
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="confirmNewPassword"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-block mt-4"
                    type="submit"
                  >
                    {isSubmitting ? "Please wait..." : "Change Password"}
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

export default ChangePassword;
