import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import * as http from 'http';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

import { typeDefs } from './schema';
import movies from './event.resolver';

const api = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers: { Query: { movies } },
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  const graphqlSendBoxUrl = ['https://studio.apollographql.com'];

  const port = 4000;

  await server.start();

  server.applyMiddleware({
    app,
    cors: {
      origin: [`http://localhost:3000`, ...graphqlSendBoxUrl],
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
