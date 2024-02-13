import React from "react";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList/RepositoryList";
import AppBar from "./AppBar/AppBar";
import theme from "../theme";
import { Route, Routes, Navigate } from "react-router-native";
import { SignIn } from "./SignIn/SignIn";
import { SignOut } from "./SignOut/SignOut";
import RepositoryView from "./AppBar/RepositoryView/RepositoryView";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor.main,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/:id" element={<RepositoryView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
