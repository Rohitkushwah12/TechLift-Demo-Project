import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email Required"),
  password: Yup.string().required("Password required"),
});
