import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "../Text";
import Constants from "expo-constants";
import theme from "../../theme";
import { Link } from "react-router-native";
import AppBarTab from "./AppBarTab";

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
          <AppBarTab label={"Repositories"} path={"/"} />
          <AppBarTab label={"Sign In"} path={"/signin"} />
        </ScrollView>
      </View>
    </>
  );
};

export default AppBar;
