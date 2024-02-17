import React from "react";
import { View } from "react-native";
import theme from "../../theme";
import { formatDate } from "../../utils/helpers";
import Text from "../Text.jsx";
import Button from "../Button/Button";
import { useNavigate } from "react-router-native";
import useReviews from "../../hooks/useReviews";
import { Alert } from "react-native";

const ReviewItem = ({ review, myReview = false }) => {
  const navigate = useNavigate();
  const { deleteReview, refetch } = useReviews();

  const handleViewClick = () => {
    navigate(`/${review.repositoryId}`);
  };

  const handleDeleteClick = async () => {
    try {
      const userConfirmed = await new Promise((resolve) => {
        Alert.alert(
          "Confirm Deletion",
          "Are you sure you want to delete this review?",
          [
            {
              text: "Cancel",
              onPress: () => resolve(false),
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => resolve(true),
            },
          ],
          { cancelable: false }
        );
      });
      if (userConfirmed) {
        await deleteReview(review.id);
        refetch();
        Alert.alert(
          "Deletion Successful",
          "The review has been deleted successfully."
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
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
          {myReview ? (
            <View style={styles.buttonContainer}>
              <Button label={"View repository"} onPress={handleViewClick} />
              <Button
                label={"Delete review"}
                color="red"
                onPress={handleDeleteClick}
              />
            </View>
          ) : null}
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
};

export default ReviewItem;
