import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import { createReviewSchema } from "./createReview.schema";
import CreateReviewForm from "./CreateReviewForm";
import useReview from "../../hooks/useReview";

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
