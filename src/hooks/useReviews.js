import { CREATE_REVIEW, DELETE_REVIEW } from "../graphql/mutations";
import { ME } from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";

const useReviews = () => {
  const [mutate, { data }] = useMutation(CREATE_REVIEW);

  const [deleteReviewMutate, { data: temp }] = useMutation(DELETE_REVIEW);

  const { data: meData, refetch } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: {
      includeReviews: true,
    },
  });

  const createReview = async ({ ownerName, text, repositoryName, rating }) => {
    try {
      const response = await mutate({
        variables: {
          review: {
            ownerName,
            rating: Number(rating),
            repositoryName,
            text,
          },
        },
      });

      return response;
    } catch (e) {
      console.error(e);
    }
  };

  const deleteReview = async (deleteReviewId) => {
    const response = await deleteReviewMutate({
      variables: {
        deleteReviewId,
      },
    });

    return response;
  };

  return { createReview, meData, deleteReview, refetch };
};

export default useReviews;
