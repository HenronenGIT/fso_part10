import React, { useState } from "react";
import { FlatList, StyleSheet, View, Pressable } from "react-native";
import useRepositories from "../../hooks/useRepositories";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import { useNavigate } from "react-router-native";
import { explodeNodes } from "../../utils/helpers";
import FiltersComponent from "./FiltersComponent";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({
  repositories,
  filters,
  setFilters,
  updateSearchKeyword,
}) => {
  const repositoryNodes = explodeNodes(repositories);

  const navigate = useNavigate();

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <FiltersComponent
            setFilters={setFilters}
            filters={filters}
            updateSearchKeyword={updateSearchKeyword}
          />
        }
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigate(`/${item.id}`);
            }}
          >
            <RepositoryItem
              fullName={item.fullName}
              description={item.description}
              language={item.language}
              forksCount={item.forksCount}
              stargazersCount={item.stargazersCount}
              ratingAverage={item.ratingAverage}
              reviewCount={item.reviewCount}
              ownerAvatarUrl={item.ownerAvatarUrl}
              id={item.id}
            />
          </Pressable>
        )}
      />
    </>
  );
};

export default RepositoryListContainer;
