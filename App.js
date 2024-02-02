import React from "react";
import Main from "./src/components/Main";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <>
      <NativeRouter>
        <Main />
        <StatusBar style="auto" />
      </NativeRouter>
    </>
  );
}
