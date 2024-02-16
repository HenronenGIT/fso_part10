import React, { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {
  const [filters, setFilters] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
    searchKeyword: "",
  });

  const { repositories, loading } = useRepositories(filters);

  const updateSearchKeyword = (keyword) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      searchKeyword: keyword,
    }));
  };

  return (
    <>
      <RepositoryListContainer
        repositories={repositories}
        filters={filters}
        setFilters={setFilters}
        updateSearchKeyword={updateSearchKeyword}
      />
    </>
  );
};

export default RepositoryList;
