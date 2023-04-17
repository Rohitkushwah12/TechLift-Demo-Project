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
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Update Form</h1>
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
