import React from "react";
import Link from "next/link";

import { Card, Pokeball, PokemonName } from "./styles";
import { countPokemon } from "../../../lib";
import { usePokemonState } from "../../../context";

const PokemonCard = ({ name, image }) => {
  const state = usePokemonState();
  const pokemonCount = countPokemon(state.pokemons, name) || 0;

  return (
    <Link href={`/pokemons/${name}`}>
      <Card>
        <img src={image} alt={name} />
        <PokemonName>{name}</PokemonName>
        <span>You have: {pokemonCount}</span>
        <Pokeball src="/pokeball.svg" />
      </Card>
    </Link>
  );
};

export default PokemonCard;
