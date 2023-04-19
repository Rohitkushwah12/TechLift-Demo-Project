import { Form, Formik } from "formik";
import React from "react";

import { editUser } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField/InputField";
import { editUserSchema } from "../ValidationSchema/editUserSchema";

const UserProfileEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.userAuth);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              name: loginUser.name,
              mobile: loginUser.mobile,
            }}
            validationSchema={editUserSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              dispatch(
                editUser({
                  email: loginUser.email,
                  mobile: values.mobile,
                  name: values.name,
                })
              );
              setTimeout(() => {
                alert("Details Updated Successfully");
              }, 2000);
              navigate("/edit-profile");
            }}
          >
            {({ isSubmitting }) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Update Form</h1>
                  </div>
                </div>
                <Form>
                  <InputField
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                  />

                  <InputField
                    label="Mobile"
                    type="text"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                  />

                  <button
                    className="btn btn-primary btn-block mt-4"
                    type="submit"
                  >
                    {isSubmitting ? "Please wait..." : "Update"}
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

export default UserProfileEdit;
