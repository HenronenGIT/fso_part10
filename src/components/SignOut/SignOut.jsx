import React from "react";
import Text from "../Text";
import theme from "../../theme";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-native";

const styles = {
  button: {
    padding: theme.padding.button,
    margin: theme.margin.main,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    maxWidth: 100,
  },
};

export const SignOut = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleOnPress = async () => {
    try {
      const response = await signOut();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Pressable style={styles.button} onPress={handleOnPress}>
        <Text>Sign Out</Text>
      </Pressable>
    </>
  );
};
