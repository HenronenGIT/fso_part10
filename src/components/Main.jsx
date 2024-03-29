import React from "react";
import { StyleSheet, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";
import theme from "../theme";
import AppBar from "./AppBar/AppBar";
import CreateReview from "./CreateReview/CreateReview";
import MyReviews from "./MyReviews/MyReviews";
import RepositoryList from "./RepositoryList/RepositoryList";
import RepositoryView from "./RepositoryView/RepositoryView";
import { SignIn } from "./SignIn/SignIn";
import { SignOut } from "./SignOut/SignOut";
import SignUp from "./SignUp/SignUp";

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createreview" element={<CreateReview />} />
        <Route path="/myreviews" element={<MyReviews />} />

        <Route path="/:id" element={<RepositoryView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
