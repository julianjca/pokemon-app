import React from "react";
import Head from "next/head";

import Pokemons from "../components/Pokemons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pokemons />
    </>
  );
}
