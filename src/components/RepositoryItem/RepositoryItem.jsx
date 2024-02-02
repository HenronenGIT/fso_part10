import React from "react";
import { Image, StyleSheet, View } from "react-native";
import ItemHeader from "./ItemHeader";
import Text from "../Text";
import ItemStats from "./ItemStats";
import theme from "../../theme";

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
  container: {
    backgroundColor: theme.colors.white,
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
    <View style={styles.container}>
      <ItemHeader
        fullName={fullName}
        description={description}
        ownerAvatarUrl={ownerAvatarUrl}
        language={language}
      />

      <ItemStats
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
