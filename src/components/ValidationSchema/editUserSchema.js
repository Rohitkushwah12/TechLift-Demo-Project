import * as Yup from "yup";

export const editUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "First Name must be 2 characters or long")
    .required("First Name required"),
  mobile: Yup.string()
    .required("Mobile number required")
    .matches(/^(?=.*[0-9])/, "please enter valid mobile number"),
});
