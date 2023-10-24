import { readFileSync } from "node:fs";
// import { createServer } from "@graphql-yoga/node";
import { Resolvers } from "./gql/server/resolvers-types";
import { createServer } from 'node:http'

const typeDefs = readFileSync("./schema.graphql", "utf8");

const resolvers: Resolvers = {
  Query: {
    posts: async () => {
      return [
        {
          id: 1,
          title: "hi",
        },
      ];
    },
  },
};

const graphQLServer = createServer({ schema: { typeDefs, resolvers } });