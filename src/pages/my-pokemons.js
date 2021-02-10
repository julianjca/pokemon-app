import React from "react";
import Head from "next/head";

import {
  Card,
  PokemonName,
  Pokeball,
} from "../components/Pokemons/PokemonCard/styles";
import { Grid } from "../components/Pokemons/styles";

import { usePokemonState, usePokemonDispatch } from "../context";
import { Spacing } from "../components/Shared";
import Button from "../components/Button";
import { RELEASE_POKEMON } from "../constants";

export default function MyPokemonsPage() {
  const { pokemons } = usePokemonState();
  const dispatch = usePokemonDispatch();

  const handleReleasePokemon = (pokemonName, pokemonNickname) => {
    dispatch({
      type: RELEASE_POKEMON,
      pokemonName,
      pokemonNickname,
    });
  };

  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacing margin="40px 0 0">
        <Grid>
          {pokemons.map((pokemon, key) => {
            return (
              <Card
                style={{
                  height: "250px",
                  cursor: "default",
                }}
                key={key}
                as="div"
              >
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.pokemonName}
                />
                <PokemonName>{pokemon.pokemonName}</PokemonName>
                <p>{pokemon.pokemonNickname}</p>
                <Pokeball src="/pokeball.svg" />
                <Button
                  style={{
                    zIndex: 10,
                    marginTop: "20px",
                  }}
                  onClick={() =>
                    handleReleasePokemon(
                      pokemon.pokemonName,
                      pokemon.pokemonNickname
                    )
                  }
                >
                  Release
                </Button>
              </Card>
            );
          })}
        </Grid>
      </Spacing>
    </>
  );
}
