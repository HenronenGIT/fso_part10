import React from "react";
import { FlatList, StyleSheet, View, Pressable } from "react-native";
import RepositoryItem from "../../RepositoryItem/RepositoryItem";
import { useParams } from "react-router-native";
import Text from "../../Text.jsx";
import useRepository from "../../../hooks/useRepository.js";
import theme from "../../../theme";
import * as Linking from "expo-linking";

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

const RepositoryView = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  const handleClick = async () => {
    try {
      await Linking.openURL(`${repository.url}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {loading ? (
        <Text>loading</Text>
      ) : (
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
      )}
    </>
  );
};

export default RepositoryView;
