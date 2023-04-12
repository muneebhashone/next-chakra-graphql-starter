import { idArg, nonNull, extendType } from "nexus";
import { userFindAll, userFindOne } from "./service";
import { UserObjectType } from "./types";

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nullable.field("users", {
      type: UserObjectType,
      async resolve() {
        const users = await userFindAll();
        return users || [];
      },
    });

    t.nullable.field("user", {
      type: UserObjectType,
      args: {
        id: nonNull(idArg()),
      },
      resolve(_, args) {
        const { id } = args;

        return userFindOne(id);
      },
    });
  },
});
