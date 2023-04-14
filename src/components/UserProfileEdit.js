import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { editUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const editUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "First Name must be 2 characters or long")
    .required("First Name required"),
  mobile: Yup.string()
    .required("Mobile number required")
    .matches(/^(?=.*[0-9])/, "please enter valid mobile number"),
});

const UserProfileEdit = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.userAuth);
  return (
    <div>
      <Formik
        initialValues={{
          name: loginUser.name,
          mobile: loginUser.mobile,
        }}
        validationSchema={editUserSchema}
        onSubmit={(values) => {
          console.log(values);
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
              <h2>Update Form</h2>

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

            <button
              className="btn btn-primary btn-block mt-4"
              type="submit"
              style={{ padding: "5px" }}
            >
              Update
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default UserProfileEdit;
