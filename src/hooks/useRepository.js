import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";
import { useState } from "react-native";

const useRepository = (repositoryId) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId },
    fetchPolicy: "cache-and-network",
    // Other options
  });

  const repository = data?.repository || null;

  return { repository, loading, error };
};

export default useRepository;
