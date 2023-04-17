import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/authSlice";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email Required"),
  password: Yup.string().required("password required"),
});

const Login = () => {
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
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              authenticateUser(values)
                ? navigate("/")
                : alert("Invalid login credentials");
            }}
          >
            {({ touched, values, errors, isSubmitting }) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Login Form</h1>
                  </div>
                </div>
                <Form>
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
