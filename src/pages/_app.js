import React from "react";
import { ThemeProvider } from "@emotion/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { globalStyles, PageContainer, theme } from "../components/Shared";
import Header from "../components/Header";
import { PokemonStateProvider } from "../context";
import { uniqBy } from "../lib";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemons: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,
          read(data) {
            return data;
          },
          // Concatenate the incoming list items with
          // the existing list items.
          merge(
            existing = {
              results: [],
            },
            incoming
          ) {
            // remove duplication from apollo
            // https://github.com/apollographql/apollo-client/issues/6679#issuecomment-663446594
            const results = uniqBy(
              [...existing.results, ...incoming.results],
              JSON.stringify
            );

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
      <PokemonStateProvider>
        <ThemeProvider theme={theme}>
          <PageContainer>
            {globalStyles}
            <Header />
            <Component {...pageProps} />
          </PageContainer>
        </ThemeProvider>
      </PokemonStateProvider>
    </ApolloProvider>
  );
}

export default MyApp;
