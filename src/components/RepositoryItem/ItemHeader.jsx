import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "../Text";
import theme from "../../theme";

// interface Props {
//   fullName: string;
//   description: string;
//   ownerAvatarUrl: string;
//   language: string;
// }

const styles = StyleSheet.create({
  flexRow: {
    padding: 5,
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
    alignItems: "left",
    justfifyContent: "space-evenly",
  },
  flexItemA: {
    flexGrow: 0,
    flexDirection: "column",
    padding: 10,
  },
  flexItemB: {
    flexGrow: 0,
    flexDirection: "column",
    padding: 10,
  },
  flexItemC: {
    flexGrow: 0,
    maxWidth: 250,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },

  tagContainer: {
    flex: 0,
    backgroundColor: theme.colors.primary,
    padding: 4,
    borderRadius: 5,
  },

  test: {
    flex: 0,
  },
});

const ItemHeader = ({ fullName, description, ownerAvatarUrl, language }) => {
  return (
    <View style={styles.flexRow}>
      <View style={styles.flexItemA}>
        <Image style={styles.tinyLogo} source={{ uri: ownerAvatarUrl }} />
      </View>

      <View style={styles.flexColumn}>
        <Text style="primary" fontWeight={"bold"}>
          {fullName}
        </Text>
        <View style={styles.flexItemC}>
          <Text style="secondary">{description}</Text>
        </View>

        <View style={styles.tagContainer}>
          <Text style="primary" color={"white"}>
            {language}
          </Text>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
};

export default ItemHeader;
