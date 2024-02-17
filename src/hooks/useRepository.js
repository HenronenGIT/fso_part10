import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const first = 4;

const useRepository = (repositoryId) => {
  const { data, loading, error, fetchMore, ...result } = useQuery(
    GET_REPOSITORY,
    {
      fetchPolicy: "cache-and-network",
      variables: { repositoryId, first },
    }
  );

  const handleFetchMore = async () => {
    const canFetchMore =
      !loading && data?.repository?.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORY,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        first,
        repositoryId,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ],
            },
          },
        };

        return nextResult;
      },
    });
  };

  return {
    repository: data?.repository,
    loading,
    error,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepository;
