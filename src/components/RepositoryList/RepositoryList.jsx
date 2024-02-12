import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  return (
    <>
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;
