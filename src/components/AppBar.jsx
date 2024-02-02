import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  flexContainer: {
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: theme.backgroundColor.appBar,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  scrollviewContainer: {
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <>
      <View style={styles.flexContainer}>
        <ScrollView style={styles.scrollviewContainer} horizontal>
          <Link to="/">
            <Text
              style="primary"
              color="white"
              fontSize="heading"
              fontWeight="bold"
            >
              Repositories
            </Text>
          </Link>

          <Link to="/signin">
            <Text
              style="primary"
              color="white"
              fontSize="heading"
              fontWeight="bold"
            >
              Sign In
            </Text>
          </Link>
        </ScrollView>
      </View>
    </>
  );
};

export default AppBar;
