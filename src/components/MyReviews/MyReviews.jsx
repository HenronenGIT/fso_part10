import React from "react";
import { FlatList, View } from "react-native";
import useReview from "../../hooks/useReviews.js";
import ReviewItem from "../ReviewItem/ReviewItem.jsx";

const MyReviews = () => {
  const { meData } = useReview();

  const reviews = meData?.me?.reviews?.edges.map((edge) => edge.node) || [];

  return (
    <View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} myReview={true} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyReviews;
