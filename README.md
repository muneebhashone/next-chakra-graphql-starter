# next-chakra-graphql-starter

next-chakra-graphql-starter is a starter template (boilerplate) for building modern full-stack web applications with Next.js (TypeScript), GraphQL Chakra UI, axios, react-query, react-icons, react-hook-form, and zustand. It provides a solid foundation for quickly prototyping and developing production-ready GraphQL API and applications with a consistent design, robust state management, and efficient data fetching.

# Stack (Frontend)

✔ Next.js.

✔ Typescript.

✔ Chakra UI.

✔ Framer Motion.

✔ Zustand.

✔ react-hook-form.

✔ react-query.

✔ react-icons.

# Stack (Backend)

✔ GraphQL with graphql-yoga and graphql-jit.

✔ next-connect for REST Api route handlers.

✔ Nexus (Code-first schema for GraphQL).

✔ Codegen with react-query support.

✔ MongoDB (mongoose).

✔ jwt and argon2 for authentication.

# Utils

✔ src/utils/axios.fetcher.ts - includes helpful utils for Data fetching:

- axiosGraphQL - for fetching the data from a GraphQL API.
- axios - for fetching the data from a RESTful API.

✔ src/utils/cloudinary.helpers.ts - includes helpful utils for Cloudinary:

- makeUploadRequest - for uploading file to cloudinary.
- makeDeleteRequest - for deleting file from cloudinary.

✔ src/utils/next.utils.ts - includes helpful utils:

- checkIsServer - for checking whether you are on a server or client.
- convertToBase64 - for converting a file to base64.
- reloadSession - for firing the visibilitychange event without changing the tab.

next-chakra-graphql-starter is intended for developers who want to start building full-stack web applications with Next.js, GraphQL, Chakra UI, axios, react-icons, react-hook-form, and zustand. To use the starter template, follow these steps:

1. Clone the repository: git clone https://github.com/muneebhashone/next-chakra-graphql-starter.git

2. Navigate to the project directory: cd next-chakra-graphql-starter

3. Install dependencies: npm install

4. Run the development server: npm run dev

Once the development server is running, you can start modifying the index (src/pages/index.tsx), and styles to fit your project's requirements. You can also customize the theme and styling system by editing the src/theme/index.ts file.

# Contributions

next-chakra-graphql-starter is an open-source project that welcomes contributions from developers of all levels and backgrounds. If you find a bug, want to suggest a feature, or want to improve the documentation, please create an issue or pull request in the project's repository.
