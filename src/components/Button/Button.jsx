import React from "react";
import Text from "../Text";
import theme from "../../theme";
import { View, Pressable, StyleSheet } from "react-native";

const Button = ({ label, onPress }) => {
  return (
    <>
      <Pressable style={styles.button} onPress={onPress}>
        <Text>{label}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: theme.padding.button,
    margin: theme.margin.main,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0366d6",
  },
  pickerStyles: {
    width: "70%",
    backgroundColor: "gray",
    color: "white",
  },
});

export default Button;
