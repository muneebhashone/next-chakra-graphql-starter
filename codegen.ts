import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/api/graphql",
  documents: "./src/graphql/*.graphql",
  watch: true,
  watchConfig: {
    usePolling: true,
    interval: 1000,
  },
  generates: {
    "./src/graphql/hooks.ts": {
      config: {
        fetcher: {
          func: "@/utils/axios.fetcher#axiosGraphQL",
          isReactHook: false,
        },
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
    },
  },
};

export default config;
