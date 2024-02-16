import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import ItemHeader from "./ItemHeader";
import Text from "../Text";
import ItemStats from "./ItemStats";
import theme from "../../theme";

import { useNavigate } from "react-router-native";

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
}) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
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
      {/* //! WHY NO VISIBLE */}
    </View>
  );
};

export default RepositoryItem;
