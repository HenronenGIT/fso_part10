import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import useAuth from "../../hooks/useAuth";
import SignUpForm from "./SignUpForm";
import { signupSchema } from "./signup.schema";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp, signIn } = useAuth();

  const handleSubmit = async (values) => {
    try {
      const { username, password } = values;

      await signUp({
        username,
        password,
      });

      await signIn({ username, password });

      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => <SignUpForm handleSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
