import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useState } from "react";

import { loginAction } from "../../store/authSlice";
import InputField from "../InputField/InputField";
import { loginSchema } from "../ValidationSchema/loginSchema";


const initialValues = {
  name: "",
  password: "",
};

const Login = () => {
  const [visible, setVisibility] = useState(false);

  const togglePassword = () => {
    setVisibility(!visible);
  };
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const authenticateUser = (values) => {
    let authUser = false;
    users.map((user) => {
      if (user.email === values.email && user.password === values.password) {
        dispatch(loginAction(user));
        return (authUser = true);
      }
    });
    return authUser;
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              authenticateUser(values)
                ? navigate("/")
                : alert("Invalid login credentials");
            }}
          >
            {({ isSubmitting }) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Login Form</h1>
                  </div>
                </div>
                <Form>
                  <InputField
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Enter Email Address"
                  />

                  <InputField
                    type={visible ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password"
                    label="Password"
                  />
                  <button
                    type="button"
                    style={{ border: "none" }}
                    onClick={togglePassword}
                  >
                    {visible ? <EyeSlash /> : <Eye />}
                  </button>

                  <button
                    className="btn btn-primary btn-block mt-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Login"}
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

export default Login;
