import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
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
        cursor
      }
      pageInfo {
        startCursor
        hasNextPage
        endCursor
      }
    }
  }
`;

export const ME = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      createdAt
      reviews @include(if: $includeReviews) {
        edges {
          node {
            repositoryId
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
