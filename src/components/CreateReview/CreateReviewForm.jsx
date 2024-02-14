import React from "react";
import { View, Pressable } from "react-native";
import FormikTextInput from "../FormikTextInput";
import Text from "../Text";
import theme from "../../theme";

const styles = {
  input: {
    margin: theme.margin.main,
    padding: theme.padding.main,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    padding: theme.padding.button,
    margin: theme.margin.main,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0366d6",
    maxWidth: 150,
  },
};

const CreateReviewForm = ({ handleSubmit }) => {
  return (
    <View>
      <FormikTextInput
        style={styles.input}
        name="ownerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        style={styles.input}
        name="repositoryName"
        placeholder="Repository name"
      />
      <FormikTextInput
        style={styles.input}
        name="rating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput style={styles.input} name="text" placeholder="Review" />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text color={"white"}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default CreateReviewForm;
