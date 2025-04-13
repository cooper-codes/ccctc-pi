import React from "react";
import "./style.css";

import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import createClient from './apolloClient'
import App from "./app";

const client = createClient()

createRoot(document.getElementById("app")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
