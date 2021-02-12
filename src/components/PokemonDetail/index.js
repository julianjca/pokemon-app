import React from "react";
import Image from "next/image";
import { Radar } from "react-chartjs-2";

import {
  ImageWrapper,
  PokemonImage,
  PokemonName,
  CatchPokemonButton,
  AttributesTitle,
  Tag,
  RadarChartWrapper,
  PokemonDetailContainer,
  TagsContainer,
  Left,
  Grid,
} from "./styles";
import { usePokemonDispatch } from "../../context";
import Button from "../Button";
import { makeSentenceCase, getCatchingOdds } from "../../lib";
import SuccessModal from "./SuccessModal";
import FailedModal from "./FailedModal";
import CatchingPokemon from "./CatchingPokemon";
import { ADD_POKEMON } from "../../constants";

const PokemonDetail = ({ pokemonData, handleOpenModal, handleCloseModal }) => {
  const dispatch = usePokemonDispatch();

  const labels = [...pokemonData.stats].map(({ stat }) =>
    stat.name === "special-defense"
      ? "S. Defense"
      : makeSentenceCase(stat.name.split("-").join(" "))
  );
  const data = [...pokemonData.stats].map(({ base_stat }) => base_stat);

  const submitPokemon = (pokemonNickname) => {
    dispatch({
      type: ADD_POKEMON,
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
    const isCatched = getCatchingOdds();

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
          <img
            src={pokemonData.sprites.front_default}
            alt={`${pokemonData.name}_front`}
          />
        </PokemonImage>
        <PokemonImage>
          <img
            src={pokemonData.sprites.back_default}
            alt={`${pokemonData.name}_back`}
          />
        </PokemonImage>
      </ImageWrapper>
      <Grid>
        <PokemonName>{pokemonData.name}</PokemonName>
      </Grid>

      <Grid>
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
                  label: makeSentenceCase(pokemonData.name),
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
      </Grid>

      <CatchPokemonButton data-testid="catch_pokemon" onClick={handleCatch}>
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
