import * as Linking from "expo-linking";
import React from "react";
import { ActivityIndicator, FlatList, Pressable, View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../../hooks/useRepository.js";
import theme from "../../theme";
import { explodeNodes, formatDate } from "../../utils/helpers";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import Text from "../Text.jsx";
import ReviewItem from "../ReviewItem/ReviewItem.jsx";

const RepositoryInfo = ({ repository }) => {
  const handleClick = async () => {
    try {
      await Linking.openURL(`${repository.url}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <RepositoryItem
          fullName={repository.fullName}
          description={repository.description}
          language={repository.language}
          forksCount={repository.forksCount}
          stargazersCount={repository.stargazersCount}
          ratingAverage={repository.ratingAverage}
          reviewCount={repository.reviewCount}
          ownerAvatarUrl={repository.ownerAvatarUrl}
          id={repository.id}
        />

        <Pressable style={styles.button} onPress={handleClick}>
          <Text style={styles.buttonText}>Open in Github</Text>
        </Pressable>
      </View>
    </>
  );
};

const RepositoryView = () => {
  const { id } = useParams();
  const { repository, loading, fetchMore } = useRepository(id);

  const reviews = repository ? explodeNodes(repository.reviews) : [];
  // const reviews = repository
  //   ? repository.reviews.edges.map((edge) => edge.node)
  //   : [];

  if (loading || !repository) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading repository data...</Text>
      </View>
    );
  }

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <>
      <FlatList
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      />
    </>
  );
};

const styles = {
  button: {
    padding: theme.padding.button,
    margin: theme.margin.main,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0366d6",
  },

  buttonText: {
    color: "white",
  },

  container: {
    backgroundColor: "white",
  },
};

export default RepositoryView;
