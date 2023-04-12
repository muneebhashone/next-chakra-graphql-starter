import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { axiosGraphQL } from '@/utils/axios.fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  deleteUser: User;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  data?: InputMaybe<UserInput>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Vendor = 'VENDOR'
}

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dob?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role: Role;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserInput = {
  dob?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  gender: Gender;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserUpdateInput = {
  dob?: InputMaybe<Scalars['DateTime']>;
  gender?: InputMaybe<Gender>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateUserMutationVariables = Exact<{
  data?: InputMaybe<UserInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', _id: string } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', _id: string } | null> };


export const CreateUserDocument = `
    mutation CreateUser($data: UserInput) {
  createUser(data: $data) {
    _id
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['CreateUser'],
      (variables?: CreateUserMutationVariables) => axiosGraphQL<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables)(),
      options
    );
export const UsersDocument = `
    query Users {
  users {
    _id
  }
}
    `;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      variables?: UsersQueryVariables,
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) =>
    useQuery<UsersQuery, TError, TData>(
      variables === undefined ? ['Users'] : ['Users', variables],
      axiosGraphQL<UsersQuery, UsersQueryVariables>(UsersDocument, variables),
      options
    );