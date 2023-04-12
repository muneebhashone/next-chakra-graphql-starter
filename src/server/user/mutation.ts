import { idArg, mutationType, nonNull, stringArg } from "nexus";
import { userCreateOne, userDeleteOne, userUpdateOne } from "./service";
import { UserInputType, UserObjectType, UserUpdateInputType } from "./types";

export const UserMutation = mutationType({
  definition(t) {
    t.nullable.field("createUser", {
      type: UserObjectType,
      args: {
        data: UserInputType,
      },
      resolve(_, args) {
        const { data } = args;
        return userCreateOne(data);
      },
    });

    t.nonNull.field("updateUser", {
      type: UserObjectType,
      args: {
        id: nonNull(stringArg()),
        data: UserUpdateInputType,
        // define more arguments here
      },
      resolve(_, args) {
        const { data, id } = args;
        return userUpdateOne(id, data);
      },
    });

    t.nonNull.field("deleteUser", {
      type: UserObjectType,
      args: {
        id: nonNull(idArg()),
      },
      resolve(_, args) {
        const { id } = args;
        return userDeleteOne(id);
      },
    });
  },
});
