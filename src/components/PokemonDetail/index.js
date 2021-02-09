import React from "react";
import Image from "next/image";
import { Radar } from "react-chartjs-2";

import {
  ImageWrapper,
  PokemonImage,
  PokemonName,
  CatchPokemonButton,
  AttributesGrid,
  AttributesTitle,
} from "./styles";
import { usePokemonDispatch } from "../../context";
import Button from "../Button";

const PokemonDetail = ({ pokemonData }) => {
  const dispatch = usePokemonDispatch();

  const labels = [...pokemonData.stats].map(({ stat }) => stat.name);
  const data = [...pokemonData.stats].map(({ base_stat }) => base_stat);
  const handleAddPokemon = () => {
    // generate number 0 or 1 (50% chance to catch)
    const isCatched = Boolean(Math.round(Math.random()));

    if (isCatched) {
      dispatch({
        type: "ADD_POKEMON",
        pokemon: pokemonData.name,
      });
    }
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

      <AttributesGrid>
        <div>
          <div>
            <AttributesTitle>Moves</AttributesTitle>
          </div>
          <div>
            <AttributesTitle>Types</AttributesTitle>
          </div>
        </div>
        <Radar
          data={{
            datasets: [
              {
                label: pokemonData.name,
                backgroundColor: "#f5656540",
                pointBackgroundColor: "#d35858",
                borderColor: "#d35858",
                data,
              },
            ],
            labels,
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </AttributesGrid>

      <CatchPokemonButton onClick={handleAddPokemon}>
        <Button
          style={{
            borderRadius: "100px",
            width: "220px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                marginRight: "20px",
              }}
            >
              Catch pokemon
            </span>
            <Image src="/pokeball.png" alt="pokeball" height={40} width={40} />
          </div>
        </Button>
      </CatchPokemonButton>
    </div>
  );
};

export default PokemonDetail;
