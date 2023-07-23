import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  user: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  postMessage: Scalars['ID']['output'];
};


export type MutationPostMessageArgs = {
  content: Scalars['String']['input'];
  user: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  messages?: Maybe<Array<Message>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messages?: Maybe<Array<Message>>;
};

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', messages?: Array<{ __typename?: 'Message', user: string, content: string, id: string }> | null };


export const GetUserDocument = gql`
    query getUser {
  messages {
    user
    content
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUser(variables?: GetUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserQuery>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUser', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;