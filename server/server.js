import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';
import port from './config/config.server.js';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

await server.start();

server.applyMiddleware({ app });

app.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
