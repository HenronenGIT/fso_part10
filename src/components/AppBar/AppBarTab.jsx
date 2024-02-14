import React from "react";
import { Link } from "react-router-native";
import Text from "../Text";
import { StyleSheet } from "react-native";

import { View } from "react-native";

const styles = StyleSheet.create({
  tab: {
    padding: 5,
  },
});

const AppBarTab = ({ path, label }) => {
  return (
    <View style={styles.tab}>
      <Link to={path}>
        <Text
          style="primary"
          color="white"
          fontSize="subheading"
          fontWeight="bold"
        >
          {label}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
