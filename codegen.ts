import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/",
  documents: ["src/**/*.tsx"],
  generates: {
    "src/graphql/gql-generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
