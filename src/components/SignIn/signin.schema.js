import * as yup from "yup";

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username needs to be at least 5 characters long")
    .required("Username is required"),

  password: yup
    .string()
    .min(5, "Password needs to be at least 5 characters long")
    .required("Password is required"),
});
