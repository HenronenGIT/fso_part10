import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../Text";

interface Props {
  stargazersCount: number;
  forksCount: number;
  reviewCount: number;
  ratingAverage: number;
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
    padding: 10,
  },
});

const ItemStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}: Props) => {
  const formatCount = (count: number) => {
    let displayCount;

    if (count >= 1000) {
      displayCount = (count / 1000).toFixed(1) + "k";
    } else {
      displayCount = count.toString();
    }
    return displayCount;
  };

  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItem}>
        <Text style="primary" fontWeight={"bold"}>
          {formatCount(stargazersCount)}
        </Text>
        <Text style="secondary">Stars</Text>
      </View>
      <View style={styles.flexItem}>
        <Text style="primary" fontWeight={"bold"}>
          {formatCount(forksCount)}
        </Text>
        <Text style="secondary">Forks</Text>
      </View>
      <View style={styles.flexItem}>
        <Text style="primary" fontWeight={"bold"}>
          {reviewCount}
        </Text>
        <Text style="secondary">Reviews</Text>
      </View>
      <View style={styles.flexItem}>
        <Text style="primary" fontWeight={"bold"}>
          {ratingAverage}
        </Text>
        <Text style="secondary">Rating</Text>
      </View>
    </View>
  );
};

export default ItemStats;
