import { hashPassword } from "@/utils/auth.utils";
import { GraphQLError } from "graphql";
import User from "./model";

export const userFindAll = async (): Promise<any[]> => {
  return User.find();
};

export const userFindOne = async (id: string): Promise<any | null> => {
  return User.findById(id);
};

export const userCreateOne = async (user: any): Promise<any | null> => {
  const emailAddressExist = await User.findOne({ email: user.email });

  if (emailAddressExist) {
    throw new GraphQLError("Email address already exist");
  }

  const usernameExist = await User.findOne({ username: user.username });

  if (usernameExist) {
    throw new GraphQLError("anyname is taken");
  }

  const hashedPassword = await hashPassword(user.password);
  return User.create({ ...user, password: hashedPassword });
};

export const userUpdateOne = async (
  id: string,
  user: any
): Promise<any | null> => {
  return User.updateOne({ id }, { ...user });
};

export const userDeleteOne = async (id: string): Promise<any | null> => {
  return User.deleteOne({ id });
};
