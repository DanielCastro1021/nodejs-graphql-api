import { ApolloServer } from 'apollo-server-express';
import { port } from './config/config.server.js';
import express from 'express';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';
import clientRoute from './routes/client.router.js';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

async function startServer() {
    // Start the Apollo Server
    await server.start();

    // Apply the Apollo GraphQL middleware and set the path to /graphql
    server.applyMiddleware({ app });

    // Serve the HTML page and static files
    app.use(express.static("./app/static"));

    // Serve the client route
    app.use(clientRoute);

    // Start the server
    app.listen(port, () =>
        console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
    );
}

startServer();
