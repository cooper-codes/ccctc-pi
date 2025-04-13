import "reflect-metadata"; // For TypeGraphQL

import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import { ApolloServer } from '@apollo/server';
import morgan from "morgan";
import cors from "cors";

import router from "./router"
import getSchema from "./graphql";

export const createServer = async (): Promise<Express> => {
  const app = express();

  const schema = await getSchema()

  const server = new ApolloServer({ schema });



  app
    .disable("x-powered-by")
    .use(morgan(process.env.NODE_ENV !== 'production' ? "dev" : "combined"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use(router)


  return app;
};
