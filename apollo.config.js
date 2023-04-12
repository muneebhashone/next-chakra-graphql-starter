module.exports = {
  client: {
    service: {
      includes: [
        "./src/graphql/mutations.graphql",
        "./src/graphql/queries.graphql",
      ],
      name: "jobdepot",
      url: "http://localhost:3000/api/graphql",
      skipSSLValidation: true,
    },
  },
};
