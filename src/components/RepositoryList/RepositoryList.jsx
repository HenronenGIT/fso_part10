import React, { useState, useEffect } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);

  const [filters, setFilters] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
    searchKeyword: debouncedSearchKeyword,
  });

  const updateSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
  };

  useEffect(() => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      searchKeyword: debouncedSearchKeyword,
    }));
  }, [debouncedSearchKeyword]);

  const { repositories, loading } = useRepositories(filters);

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
