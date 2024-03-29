import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { Request } from 'express';
import * as http from 'http';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import dotenv from 'dotenv';

const api = async () => {
  const app = express();

  dotenv.config();
  const httpServer = http.createServer(app);

  const context = ({req}: { req: Request}) => ({
    locale: req?.headers?.locale || 'en-US'
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context
  });

  const port = process.env.PORT;

  await server.start();

  server.applyMiddleware({
    app,
    cors: {
      origin: '*',
      credentials: true,
    },
    path: '/api',
  });

  await new Promise<void>(
    (resolve) => httpServer.listen({ port }, resolve)
  );

  console.log(`🚀🚀🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

api();
