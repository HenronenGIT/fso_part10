import { CREATE_REVIEW } from "../graphql/mutations";
import { ME } from "../graphql/queries";

import { useMutation, useQuery } from "@apollo/client";

const useReviews = () => {
  const [mutate, { data }] = useMutation(CREATE_REVIEW);

  const { data: meData } = useQuery(ME, {
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

  return { createReview, meData };
};

export default useReviews;
