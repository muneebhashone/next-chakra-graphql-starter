import { makeSchema } from "nexus";
import { join } from "path";
import { cwd } from "process";
import Enums from "./enums";
import Scalars from "./scalars";
import Users from "./user";

export const schema = makeSchema({
  types: [Enums, Scalars, Users], // 1
  outputs: {
    typegen: join(cwd(), "nexus-typegen.ts"), // 2
    schema: join(cwd(), "schema.graphql"), // 3
  },
});
