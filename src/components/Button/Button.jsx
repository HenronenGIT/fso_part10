import React from "react";
import Text from "../Text";
import theme from "../../theme";
import { View, Pressable, StyleSheet } from "react-native";

const Button = ({ label, onPress, color = theme.backgroundColor.primary }) => {
  return (
    <>
      <Pressable
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.label}>{label}</Text>
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
    backgroundColor: theme.backgroundColor.primary,
  },
  pickerStyles: {
    width: "70%",
    backgroundColor: "gray",
    color: "white",
  },
  label: {
    color: theme.colors.white,
  },
});

export default Button;
