import * as yup from "yup";

export const createReviewSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number("Rating must be number of 0-100")
    .min(0, "Rating must be at least 0")
    .max(100, "Rating cannot exceed 100")
    .required("Rating is required"),
  text: yup.string(),
});
