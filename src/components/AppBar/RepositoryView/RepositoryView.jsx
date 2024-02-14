import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import RepositoryItem from "../../RepositoryItem/RepositoryItem";
import { useParams } from "react-router-native";
import Text from "../../Text.jsx";
import useRepository from "../../../hooks/useRepository.js";
import theme from "../../../theme";
import * as Linking from "expo-linking";
import { explodeNodes } from "../../../utils/helpers";
import { formatDate } from "../../../utils/helpers";

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

  rateContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 45, // Set a fixed width
    height: 45, // Set a fixed height
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 40, // Half of the width and height to maintain the circle shape
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "blue",
    margin: 5,
    alignSelf: "flex-start",
  },

  ratingContainer: {
    flexDirection: "row",
    padding: theme.padding.main,
    margin: theme.margin.main,
    backgroundColor: theme.backgroundColor.white,
  },
  commentContainer: {
    maxWidth: 280,
  },
};

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

const ReviewItem = ({ review }) => {
  return (
    <>
      <View style={styles.ratingContainer}>
        <View style={styles.rateContainer}>
          <Text styles={{ textColor: "blue" }}>{review.rating}</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text fontWeight={"bold"}>{review.user.username}</Text>
          <Text color={"textSecondary"}>{formatDate(review.createdAt)}</Text>
          <Text style={styles.commentContainer}>{review.text}</Text>
        </View>
      </View>
    </>
  );
};

const RepositoryView = ({}) => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);
  const reviews = repository ? explodeNodes(repository.reviews) : [];

  if (loading || !repository) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading repository data...</Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      />
    </>
  );
};

export default RepositoryView;
