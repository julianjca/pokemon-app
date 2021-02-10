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
  Tag,
  RadarChartWrapper,
  PokemonDetailContainer,
  TagsContainer,
  Left,
} from "./styles";
import { usePokemonDispatch, usePokemonState } from "../../context";
import Button from "../Button";
import { makeSentenceCase, countPokemon } from "../../lib";
import SuccessModal from "./SuccessModal";
import FailedModal from "./FailedModal";
import CatchingPokemon from "./CatchingPokemon";

const PokemonDetail = ({ pokemonData, handleOpenModal, handleCloseModal }) => {
  const dispatch = usePokemonDispatch();
  const state = usePokemonState();

  // eslint-disable-next-line no-unused-vars
  const pokemonCount = countPokemon(state.pokemons, pokemonData.name) || 0;

  const labels = [...pokemonData.stats].map(({ stat }) =>
    stat.name === "special-defense"
      ? "S. Defense"
      : makeSentenceCase(stat.name.split("-").join(" "))
  );
  const data = [...pokemonData.stats].map(({ base_stat }) => base_stat);

  const submitPokemon = (pokemonNickname) => {
    dispatch({
      type: "ADD_POKEMON",
      pokemon: {
        pokemonName: pokemonData.name,
        pokemonNickname,
        sprites: pokemonData.sprites,
      },
    });

    handleCloseModal();
  };

  const handleCatch = () => {
    // generate number 0 or 1 (50% chance to catch)
    const isCatched = Boolean(Math.round(Math.random()));

    // showing loading modal
    handleOpenModal(true, <CatchingPokemon />);

    if (isCatched) {
      setTimeout(() => {
        handleOpenModal(
          true,
          <SuccessModal
            onClick={submitPokemon}
            pokemonName={pokemonData.name}
          />
        );
      }, 1500);
      return;
    }
    setTimeout(() => {
      handleOpenModal(true, <FailedModal onClick={handleCatch} />);
    }, 1500);
  };

  return (
    <PokemonDetailContainer>
      <ImageWrapper>
        <PokemonImage>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </PokemonImage>
        <PokemonImage>
          <img src={pokemonData.sprites.back_default} alt={pokemonData.name} />
        </PokemonImage>
      </ImageWrapper>
      <PokemonName>{pokemonData.name}</PokemonName>

      <AttributesGrid>
        <Left>
          <div>
            <AttributesTitle>Moves</AttributesTitle>
            <TagsContainer>
              {pokemonData.abilities.map(({ ability: { name } }) => (
                <Tag key={name}>{name}</Tag>
              ))}
            </TagsContainer>
          </div>
          <div>
            <AttributesTitle>Types</AttributesTitle>
            <TagsContainer>
              {pokemonData.types.map(({ type: { name } }) => (
                <Tag key={name}>{name}</Tag>
              ))}
            </TagsContainer>
          </div>
        </Left>
        <RadarChartWrapper>
          <Radar
            data={{
              datasets: [
                {
                  label: pokemonData.name,
                  backgroundColor: "#152C5740",
                  pointBackgroundColor: "#152C57",
                  borderColor: "#152C57",
                  data,
                },
              ],
              labels,
            }}
            height={50}
            width={50}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
          />
        </RadarChartWrapper>
      </AttributesGrid>

      <CatchPokemonButton onClick={handleCatch}>
        <Button
          style={{
            borderRadius: "100px",
            width: "220px",
            boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/catch_pokeball.png"
              alt="pokeball"
              height={40}
              width={40}
            />
            <span
              style={{
                marginLeft: "20px",
              }}
            >
              Catch pokemon
            </span>
          </div>
        </Button>
      </CatchPokemonButton>
    </PokemonDetailContainer>
  );
};

export default PokemonDetail;
