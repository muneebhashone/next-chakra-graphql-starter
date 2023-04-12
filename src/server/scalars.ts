import { DateTimeResolver, EmailAddressResolver } from "graphql-scalars";
import { scalarType } from "nexus";

export const DateTime = scalarType({
  name: "DateTime",
  asNexusMethod: "dateTime",
  serialize: DateTimeResolver.serialize,
  parseValue: DateTimeResolver.parseValue,
  parseLiteral: DateTimeResolver.parseLiteral,
});

export const EmailAddress = scalarType({
  name: "EmailAddress",
  asNexusMethod: "emailAddress",
  serialize: EmailAddressResolver.serialize,
  parseValue: EmailAddressResolver.parseValue,
  parseLiteral: EmailAddressResolver.parseLiteral,
});

const Scalars = [EmailAddress, DateTime];

export default Scalars;
