import React, { useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import Button from "../Button/Button";
import RNPickerSelect from "react-native-picker-select";
import theme from "../../theme";
import Text from "../Text.jsx";
import TextInput from "../TextInput";
import useRepositories from "../../hooks/useRepositories";

const ITEMS = [
  {
    label: "Latest repositories",
    value: { orderBy: "CREATED_AT", orderDirection: "DESC" },
  },
  {
    label: "Oldest repositories",
    value: { orderBy: "CREATED_AT", orderDirection: "ASC" },
  },
  {
    label: "Highest rated repositories",
    value: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
  },
  {
    label: "Lowest rated repositories",
    value: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
  },
];

const FiltersComponent = ({ setFilters, filters, updateSearchKeyword }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Search repositories"
        onChange={(event) => updateSearchKeyword(event.nativeEvent.text)}
      />
      <View style={styles.container}>
        <RNPickerSelect
          style={styles.container}
          onValueChange={setFilters}
          items={ITEMS}
          value={filters}
          textInputProps={{
            style: {
              ...styles.text,
            },
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f8f8f8", // Example background color
    borderWidth: 1, // Example border width
    borderColor: "#ccc", // Example border color
    borderRadius: 5, // Example border radius
    paddingHorizontal: 10, // Example horizontal padding
    paddingVertical: 5, // Example vertical padding
  },
  text: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  },
});

export default FiltersComponent;
