import React from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";

import Pokemons from "../components/Pokemons";
import { GET_POKEMONS } from "../queries/Pokemons";

export default function Home() {
  const { error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: {
      limit: 30,
      offset: 0,
    },
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    return <div>error from server</div>;
  }

  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data && (
        <Pokemons pokemons={data ? data.pokemons : []} fetchMore={fetchMore} />
      )}
    </>
  );
}
