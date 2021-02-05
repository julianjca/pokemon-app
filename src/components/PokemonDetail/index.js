import React from "react";

import { ImageWrapper, PokemonImage, PokemonName } from "./styles";

const PokemonDetail = ({ pokemonData }) => {
  return (
    <div
      style={{
        padding: "4rem 0",
      }}
    >
      <ImageWrapper>
        <PokemonImage
          src={pokemonData.sprites.front_default}
          alt={pokemonData.name}
        />
        <PokemonImage
          src={pokemonData.sprites.back_default}
          alt={pokemonData.name}
        />
      </ImageWrapper>
      <PokemonName>{pokemonData.name}</PokemonName>
    </div>
  );
};

export default PokemonDetail;
