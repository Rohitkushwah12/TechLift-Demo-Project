import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email Required"),
  password: Yup.string().required("password required"),
});

const authenticateUser = (values) => {
  const users = JSON.parse(localStorage.getItem("users"));

  let authUser = false;
  users.map((user) => {
    if (user.email === values.email && user.password === values.password) {
      return (authUser = true);
    }
  });
  return authUser;
};

const Login = () => {
  const redirectUser = (values) => {
    localStorage.setItem("loginUser", JSON.stringify(values));
    navigate("/");
  };

  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          authenticateUser(values)
            ? redirectUser(values)
            : alert("Invalid login credentials");
        }}
      >
        <div>
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter Email Address"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Login</button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default Login;
