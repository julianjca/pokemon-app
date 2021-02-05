import React from "react";
import Link from "next/link";

import { Card } from "./styles";

const PokemonCard = ({ name, image }) => {
  return (
    <Link href={`/pokemons/${name}`}>
      <Card>
        <img src={image} alt={name} />
        <div>{name}</div>
      </Card>
    </Link>
  );
};

export default PokemonCard;
