import React from "react";
import Link from "next/link";

import { Card, Pokeball, PokemonName } from "./styles";

const PokemonCard = ({ name, image }) => {
  return (
    <Link href={`/pokemons/${name}`}>
      <Card>
        <img src={image} alt={name} />
        <PokemonName>{name}</PokemonName>
        <Pokeball src="/pokeball.svg" />
      </Card>
    </Link>
  );
};

export default PokemonCard;
