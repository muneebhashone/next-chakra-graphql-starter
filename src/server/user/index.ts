import { UserMutation } from "./mutation";
import { UserQuery } from "./query";
import { UserInputType, UserObjectType, UserUpdateInputType } from "./types";

const Users = [
  UserQuery,
  UserMutation,
  UserObjectType,
  UserInputType,
  UserUpdateInputType,
];

export default Users;
