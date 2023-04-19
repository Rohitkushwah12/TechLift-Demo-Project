import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changePassword } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField/InputField";
import { changePasswordSchema } from "../ValidationSchema/changePasswordSchema";
import { editProfile } from "../../routeTypes/routeTypes";

const initialValues = {
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

const ChangePassword = () => {
  const authenticateChangePassword = (values) => {
    if (loginUser.password !== values.oldPassword) {
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

  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={initialValues}
            validationSchema={changePasswordSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              authenticateChangePassword(values);
              navigate(editProfile);
            }}
          >
            {({ isSubmitting }) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Change Password</h1>
                  </div>
                </div>
                <Form>
                  <InputField
                    type="password"
                    name="oldPassword"
                    placeholder="Enter Old Password"
                    label="Old Password"
                  />

                  <InputField
                    type="password"
                    name="newPassword"
                    label="New Password"
                    placeholder="Enter New Password"
                  />

                  <InputField
                    label="Confirm New Password"
                    type="password"
                    name="confirmNewPassword"
                    placeholder="Enter New Password Again"
                  />

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
