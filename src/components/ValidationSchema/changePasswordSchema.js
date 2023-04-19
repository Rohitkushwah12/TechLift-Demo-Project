import * as Yup from "yup";

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old Password required"),
  newPassword: Yup.string()
    .min(8, "Password must be 8 characters or long")
    .required("New Password required")
    .matches(/^(?=.*[a-z])/, "must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "must contain at least one number")
    .matches(
      /^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/,
      "must contain at least one special character"
    ),
  confirmNewPassword: Yup.string()
    .required("Confirm Password required")
    .oneOf([Yup.ref("newPassword"), null], "Password must match"),
});
