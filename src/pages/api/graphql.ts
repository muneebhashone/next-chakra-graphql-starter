import { useGraphQlJit as GraphQlJit } from "@envelop/graphql-jit";
import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { schema } from "@/server/schema";
import dbConnect from "@/lib/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  return createYoga<{ req: NextApiRequest; res: NextApiResponse }>({
    schema,
    plugins: [GraphQlJit()],
    graphqlEndpoint: "/api/graphql",
    logging: "info",
  })(req, res);
};

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
