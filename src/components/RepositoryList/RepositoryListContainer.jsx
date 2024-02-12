import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import useRepositories from "../../hooks/useRepositories";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import Text from "../Text";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <>
      {/* {loading ? ( */}
      {/* <View>
        <Text>Loading...</Text>
      </View> */}
      {/* ) : ( */}
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <RepositoryItem
            fullName={item.fullName}
            description={item.description}
            language={item.language}
            forksCount={item.forksCount}
            stargazersCount={item.stargazersCount}
            ratingAverage={item.ratingAverage}
            reviewCount={item.reviewCount}
            ownerAvatarUrl={item.ownerAvatarUrl}
          />
        )}
      />
      {/* )} */}
    </>
  );
};

export default RepositoryListContainer;
