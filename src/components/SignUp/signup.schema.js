import * as yup from "yup";

export const signupSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be at least  5 characters long")
    .max(30, "Username cannot exceed  30 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least  5 characters long")
    .max(50, "Password cannot exceed  50 characters"),
  passwordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
