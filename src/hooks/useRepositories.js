import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useRepositories = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: variables.filters.orderBy,
      orderDirection: variables.filters.orderDirection,
      searchKeyword: variables.filters.searchKeyword,
      first: variables.first,
    },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        first: variables.first,
      },
    });
  };
  
  return {
    repositories: data?.repositories,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepositories;
