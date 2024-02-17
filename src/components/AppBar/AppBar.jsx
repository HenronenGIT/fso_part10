import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import { Link } from "react-router-native";
import AppBarTab from "./AppBarTab";
import { useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries";

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
  const { data } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  const renderNonAuthenticatedTabs = () => {
    if (!data?.me) {
      return (
        <>
          <AppBarTab label="Sign In" path="/signin" />
          <AppBarTab label={"Sign Up"} path={"/signup"} />
        </>
      );
    }
  };

  const renderAuthenticatedTabs = () => {
    if (data?.me) {
      return (
        <>
          <AppBarTab label="Create a review" path={"/createreview"} />
          <AppBarTab label="My Reviews" path="/myreviews" />
          <AppBarTab label="Sign Out" path="/signout" />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <View style={styles.flexContainer}>
        <ScrollView style={styles.scrollviewContainer} horizontal>
          <AppBarTab label={"Repositories"} path={"/"} />
          {renderNonAuthenticatedTabs()}
          {renderAuthenticatedTabs()}
        </ScrollView>
      </View>
    </>
  );
};

export default AppBar;
