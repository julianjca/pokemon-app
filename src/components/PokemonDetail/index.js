import React from "react";

import { ImageWrapper, PokemonImage, PokemonName } from "./styles";
import { usePokemonDispatch } from "../../context";
import Button from "../Button";

const PokemonDetail = ({ pokemonData }) => {
  const dispatch = usePokemonDispatch();

  const handleAddPokemon = () => {
    dispatch({
      type: "ADD_POKEMON",
      pokemon: pokemonData.name,
    });
  };

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
      <Button onClick={handleAddPokemon}>Add Pokemon</Button>
    </div>
  );
};

export default PokemonDetail;
