import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "First Name must be 2 characters or long")
    .required("First Name required"),
  mobile: Yup.string()
    .required("Mobile number required")
    .matches(/^(?=.*[0-9])/, "please enter valid mobile number"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters or long")
    .required("Password required")
    .matches(/^(?=.*[a-z])/, "must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "must contain at least one number")
    .matches(
      /^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/,
      "must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  termsAndCondition: Yup.boolean().isTrue("please agree to terms & conditions"),
});
