import React from "react";
import { View, FlatList } from "react-native";
import Text from "../Text.jsx";
import useReview from "../../hooks/useReview.js";
import ReviewItem from "../ReviewItem/ReviewItem.jsx";

const MyReviews = () => {
  const { meData } = useReview();

  const reviews = meData?.me?.reviews?.edges.map((edge) => edge.node) || [];

  return (
    <View>
      <Text>My Reviews</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} myReview={true} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyReviews;
