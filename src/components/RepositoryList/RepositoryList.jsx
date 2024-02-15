import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [filters, setFilters] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });

  const { repositories, loading } = useRepositories(filters);

  return (
    <>
      <RepositoryListContainer
        repositories={repositories}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  );
};

export default RepositoryList;
