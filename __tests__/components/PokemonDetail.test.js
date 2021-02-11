/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { matchers } from "@emotion/jest";

import { render, fireEvent, act } from "../../test-utils";
import PokemonDetail from "../../src/components/PokemonDetail";
import * as lib from "../../src/lib";

expect.extend(matchers);

HTMLCanvasElement.prototype.getContext = () => {
  // return whatever getContext has to return
};

jest.mock("react-chartjs-2", () => ({
  Radar: () => null,
}));

jest.mock("../../src/lib");

const pokemonData = {
  __typename: "Pokemon",
  name: "bulbasaur",
  sprites: {
    __typename: "Sprite",
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
  },
  abilities: [
    {
      __typename: "Ability",
      ability: {
        __typename: "BaseName",
        url: "https://pokeapi.co/api/v2/ability/65/",
        name: "overgrow",
      },
    },
    {
      __typename: "Ability",
      ability: {
        __typename: "BaseName",
        url: "https://pokeapi.co/api/v2/ability/34/",
        name: "chlorophyll",
      },
    },
  ],
  stats: [
    {
      __typename: "Stat",
      base_stat: 45,
      effort: 0,
      stat: { __typename: "BaseName", name: "hp" },
    },
    {
      __typename: "Stat",
      base_stat: 49,
      effort: 0,
      stat: { __typename: "BaseName", name: "attack" },
    },
    {
      __typename: "Stat",
      base_stat: 49,
      effort: 0,
      stat: { __typename: "BaseName", name: "defense" },
    },
    {
      __typename: "Stat",
      base_stat: 65,
      effort: 1,
      stat: { __typename: "BaseName", name: "special-attack" },
    },
    {
      __typename: "Stat",
      base_stat: 65,
      effort: 0,
      stat: { __typename: "BaseName", name: "special-defense" },
    },
    {
      __typename: "Stat",
      base_stat: 45,
      effort: 0,
      stat: { __typename: "BaseName", name: "speed" },
    },
  ],
  types: [
    {
      __typename: "Type",
      type: {
        __typename: "BaseName",
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      __typename: "Type",
      type: {
        __typename: "BaseName",
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
};

describe("PokemonDetail", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test("renders the component", () => {
    const element = render(<PokemonDetail pokemonData={pokemonData} />);

    expect(element).toMatchSnapshot();
  });

  test("renders pokemon data", () => {
    const { getByText, getByAltText } = render(
      <PokemonDetail pokemonData={pokemonData} />
    );

    expect(getByText("bulbasaur")).toBeInTheDocument();
    expect(getByText("overgrow")).toBeInTheDocument();
    expect(getByText("chlorophyll")).toBeInTheDocument();
    expect(getByText("grass")).toBeInTheDocument();
    expect(getByText("poison")).toBeInTheDocument();
    expect(getByAltText("bulbasaur_front")).toBeInTheDocument();
    expect(getByAltText("bulbasaur_back")).toBeInTheDocument();
  });

  test("renders catch pokemon button and showing success modal", () => {
    const handleOpenModal = jest.fn();
    const catchingOdds = jest
      .spyOn(lib, "getCatchingOdds")
      .mockReturnValueOnce(true);

    const { getByTestId } = render(
      <PokemonDetail
        pokemonData={pokemonData}
        handleOpenModal={handleOpenModal}
      />
    );

    const catchPokemonButton = getByTestId("catch_pokemon");
    expect(catchPokemonButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(catchPokemonButton);
      jest.runAllTimers();
      // runs the first loading modal
      // open success modal form
      expect(handleOpenModal).toHaveBeenCalledTimes(2);
    });

    catchingOdds.mockRestore();
  });

  test("renders catch pokemon button and showing failed modal", () => {
    const handleOpenModal = jest.fn();
    const catchingOdds = jest
      .spyOn(lib, "getCatchingOdds")
      .mockReturnValueOnce(false);

    const { getByTestId } = render(
      <PokemonDetail
        pokemonData={pokemonData}
        handleOpenModal={handleOpenModal}
      />
    );

    const catchPokemonButton = getByTestId("catch_pokemon");
    expect(catchPokemonButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(catchPokemonButton);

      jest.runAllTimers();

      // runs the first loading modal
      // open failed modal form
      expect(handleOpenModal).toHaveBeenCalledTimes(2);
    });

    catchingOdds.mockRestore();
  });
});
