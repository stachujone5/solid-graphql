import { GraphQLClient } from "graphql-request";
import { getSdk } from "./gql-generated";

export const client = getSdk(new GraphQLClient("http://localhost:4000/"));
