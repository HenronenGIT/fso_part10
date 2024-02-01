import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: theme.backgroundColor.appBar,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style="primary" color="white" fontSize="heading" fontWeight="bold">
        Repositories
      </Text>
    </View>
  );
};

export default AppBar;
