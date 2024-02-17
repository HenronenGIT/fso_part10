import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-native";
import useReview from "../../hooks/useReviews";
import CreateReviewForm from "./CreateReviewForm";
import { createReviewSchema } from "./createReview.schema";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const CreateReview = () => {
  const navigate = useNavigate();
  const { createReview } = useReview();

  const handleSubmit = async (values) => {
    try {
      const { ownerName, repositoryName, rating, text } = values;

      const { data } = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });

      navigate(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createReviewSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => <CreateReviewForm handleSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReview;
