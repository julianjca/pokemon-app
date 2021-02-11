import React from "react";
import { ThemeProvider } from "@emotion/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";

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
          <Head>
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#193569" />
            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="/icons/touch-icon-iphone-114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/icons/touch-icon-iphone-114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="/icons/touch-icon-ipad-144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/icons/touch-icon-ipad-144.png"
            />
          </Head>
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
