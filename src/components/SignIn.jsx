import React from "react";
import Text from "./Text";
import { View, Pressable } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";

const initialValues = {
  username: "",
  password: "",
};

// export const SignInForm = () => {
const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Pressable onPress={onSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

export const SignIn = () => {
  const onSubmit = () => {
    console.log("Submitted");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      // validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};
