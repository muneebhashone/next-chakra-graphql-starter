import { inputObjectType, objectType } from "nexus";

export const UserObjectType = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("_id");
    t.nullable.string("name");
    t.nonNull.string("email");
    t.nonNull.string("username");
    t.nullable.field("emailVerified", { type: "DateTime" });
    t.nullable.string("image");
    t.nullable.field("gender", { type: "GENDER" });
    t.nonNull.field("role", { type: "ROLE" });
    t.nullable.field("dob", { type: "DateTime" });
    t.nullable.string("phone");
    t.nullable.boolean("active");
    t.nullable.field("createdAt", { type: "DateTime" });
    t.nullable.field("updatedAt", { type: "DateTime" });
    // t.nullable.string('passwordResetCode')
    // t.nullable.string('verificationCode')
  },
});

export const UserInputType = inputObjectType({
  name: "UserInput",
  definition(t) {
    t.nullable.string("name");
    t.nonNull.field("email", { type: "EmailAddress" });
    t.nonNull.string("username");
    t.nullable.string("image");
    t.nonNull.field("gender", { type: "GENDER" });
    t.nullable.field("dob", { type: "DateTime" });
    t.nullable.string("phone");
    t.nonNull.string("password");
  },
});

export const UserUpdateInputType = inputObjectType({
  name: "UserUpdateInput",
  definition(t) {
    t.nullable.string("name");
    t.nullable.string("image");
    t.nullable.field("gender", { type: "GENDER" });
    t.nullable.field("dob", { type: "DateTime" });
    t.nullable.string("phone");
  },
});
