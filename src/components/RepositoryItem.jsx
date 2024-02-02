import React from "react";
// import { View } from "react-native";
import { View, Image, StyleSheet } from "react-native";

import Text from "./Text";

interface Props {
  fullName: string;
  description: string;
  language: string;
  stargazersCount: number;
  forksCount: number;
  reviewCount: number;
  ratingAverage: number;
  ownerAvatarUrl: string;
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  flexItem: {
    flexGrow: 0,
    flexDirection: "column",
    alignItems: "center",
  },
  flexItemC: {
    flexGrow: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  ownerAvatarUrl,
}: Props) => {
  return (
    <View>
      <Image style={styles.tinyLogo} source={{ uri: ownerAvatarUrl }} />
      <Text style="primary">Full name: {fullName}</Text>
      <Text style="primary">Description: {description}</Text>
      <Text style="primary">Language: {language}</Text>
      <View style={styles.flexContainer}>
        <View style={styles.flexItem}>
          <Text style="primary">{stargazersCount}</Text>
          <Text style="primary">Stars</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style="primary">{forksCount}</Text>
          <Text style="primary">Forks</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style="primary">{reviewCount}</Text>
          <Text style="primary">Reviews</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style="primary">{ratingAverage}</Text>
          <Text style="primary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
