import React from "react";
import Text from "../Text";
import { View, Pressable } from "react-native";
import FormikTextInput from "../FormikTextInput";
import { Formik } from "formik";
import { validationSchema } from "./signin.schema";
import theme from "../../theme";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-native";

const initialValues = {
  username: "",
  password: "",
};

const styles = {
  button: {
    padding: theme.padding.button,
    margin: theme.margin.main,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0366d6",
    maxWidth: 100,
  },
  input: {
    margin: theme.margin.main,
    padding: theme.padding.main,
    borderWidth: 1,
    borderColor: "black",
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
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      if (data.authenticate.accessToken) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </>
  );
};
