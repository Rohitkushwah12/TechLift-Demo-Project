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
    <div>
      <h2>Change Password</h2>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }}
        validationSchema={changePasswordSchema}
        onSubmit={(values) => {
          authenticateChangePassword(values);
        }}
      >
        <Form>
          <div>
            <lable htmlFor="oldPassword">Old Password</lable>
            <Field
              type="password"
              name="oldPassword"
              placeholder="Enter Old Password"
            />
            <ErrorMessage name="oldPassword" component="div" />
          </div>
          <div>
            <lable htmlFor="password">New Password</lable>
            <Field
              type="password"
              name="newPassword"
              placeholder="Enter New Password"
            />
            <ErrorMessage name="newPassword" component="div" />
          </div>
          <div>
            <lable htmlFor="confirmNewPassword">Confirm New Password</lable>
            <Field
              type="password"
              name="confirmNewPassword"
              placeholder="Enter New Password Again"
            />
            <ErrorMessage name="confirmNewPassword" component="div" />
          </div>
          <button type="submit">Change Password</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePassword;
