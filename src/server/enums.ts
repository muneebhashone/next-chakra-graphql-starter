import { enumType } from "nexus";

export enum Gender {
  MALE,
  FEMALE,
  OTHER,
}

export enum Role {
  ADMIN,
  USER,
  VENDOR,
}

export const GENDER = enumType({
  name: "GENDER",
  members: {
    MALE: "MALE",
    FEMALE: "FEMALE",
    OTHER: "OTHER",
  },
});

export const ROLE = enumType({
  name: "ROLE",
  members: {
    ADMIN: "ADMIN",
    USER: "USER",
    VENDOR: "VENDOR",
  },
});

const Enums = [GENDER, ROLE];

export default Enums;
