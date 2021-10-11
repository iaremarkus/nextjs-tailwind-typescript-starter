import { GraphQLClient } from "graphql-request";

import { getSdk } from "../generated/graphql";

// Returns the CMS url
export const getCmsURL = (path = "") => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
};

// Returns the CMS Graphql url
export const getGraphQLURL = () => {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  return apiUrl + "/graphql";
};

// GraphQL Request client
const client = new GraphQLClient(getGraphQLURL());

// CMS SDK
export const CMS = getSdk(client);

// Helper to make GET requests to Strapi CMS
export const fetchAPI = async path => {
  const requestUrl = getCmsURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
};
