import React from "react";
import { View } from "react-native";
import Text from "./Text";

interface Props {
  fullName: string;
  description: string;
  language: string;
  stargazersCount: number;
  forksCount: number;
  reviewCount: number;
  ratingAverage: number;
}

const RepositoryItem = (props: Props) => {
  // Destructure the props here
  return (
    <View>
      <Text style="primary">Full name: {props.fullName}</Text>
      <Text style="primary">Description: {props.description}</Text>
      <Text style="primary">Language: {props.language}</Text>
      <Text style="primary">Stars: {props.stargazersCount}</Text>
      <Text style="primary">Forks: {props.forksCount}</Text>
      <Text style="primary">Reviews: {props.reviewCount}</Text>
      <Text style="primary">Rating: {props.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
