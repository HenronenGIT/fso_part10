import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
          id
        }
      }
    }
  }
`;

export const ME = gql`
  query me {
    me {
      createdAt
      reviews {
        edges {
          node {
            rating
            id
            text
            createdAt
            user {
              username
            }
            repository {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      id
      url
      reviews {
        edges {
          node {
            rating
            createdAt
            text
            user {
              username
            }
          }
        }
      }
    }
  }
`;
