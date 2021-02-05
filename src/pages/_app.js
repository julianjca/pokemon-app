import React from "react";

import { globalStyles, PageContainer } from "../components/Shared";
import Header from "../components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemons: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,
          // Concatenate the incoming list items with
          // the existing list items.
          merge(
            existing = {
              results: [],
            },
            incoming
          ) {
            const results = [...existing.results, ...incoming.results];
            return {
              results,
            };
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache,
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <PageContainer>
        {globalStyles}
        <Header />
        <Component {...pageProps} />
      </PageContainer>
    </ApolloProvider>
  );
}

export default MyApp;
