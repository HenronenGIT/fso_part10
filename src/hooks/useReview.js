import { CREATE_REVIEW } from "../graphql/mutations";

import { useMutation } from "@apollo/client";

const useReview = () => {
  const [mutate, { data }] = useMutation(CREATE_REVIEW);

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

  return { createReview };
};

export default useReview;
