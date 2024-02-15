import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useRepositories = (filters) => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      ...filters,
    },
  });
  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;
