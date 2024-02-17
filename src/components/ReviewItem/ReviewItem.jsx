import React from "react";
import { View } from "react-native";
import theme from "../../theme";
import { formatDate } from "../../utils/helpers";
import Text from "../Text.jsx";
import Button from "../Button/Button";

const ReviewItem = ({ review, myReview = false }) => {
  return (
    <>
      <View style={styles.ratingContainer}>
        <View style={styles.rateContainer}>
          <Text styles={{ textColor: "blue" }}>{review.rating}</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text fontWeight={"bold"}>
            {myReview ? review.repository.name : review.user.username}
          </Text>
          <Text color={"textSecondary"}>{formatDate(review.createdAt)}</Text>
          <Text style={styles.comment}>{review.text}</Text>
          {/* <Button label={"View"}/> */}
        </View>
      </View>
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
  comment: {
    maxWidth: 280,
    marginTop: 10, // Add  10px margin on all sides
  },
};

export default ReviewItem;
