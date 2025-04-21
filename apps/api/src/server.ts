import "reflect-metadata"; // For TypeGraphQL

import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import { ApolloServer } from '@apollo/server';
import morgan from "morgan";
import cors from "cors";

import router from "./router"
import getSchema from "./graphql";
import { expressMiddleware } from "@apollo/server/express4";

export const createServer = async (): Promise<Express> => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(morgan(process.env.NODE_ENV !== 'production' ? "dev" : "combined"))
    .use(urlencoded({ extended: true }))


  app.use(router)

  const schema = await getSchema()

  const server = new ApolloServer({ schema });

  await server.start()

  app.use('/', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server))

  return app;
};
