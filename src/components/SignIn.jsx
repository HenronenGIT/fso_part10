import React from "react";
import Text from "./Text";
import { View, Pressable } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";

const initialValues = {
  username: "",
  password: "",
};

const styles = {
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0366d6",
    maxWidth: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        style={styles.input}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        style={styles.input}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={onSubmit}>
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
