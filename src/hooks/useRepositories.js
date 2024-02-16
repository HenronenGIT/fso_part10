import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

const useRepositories = (filters) => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: filters.orderBy,
      orderDirection: filters.orderDirection,
      searchKeyword: filters.searchKeyword,
    },
  });

  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;
