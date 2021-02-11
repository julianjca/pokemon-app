/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { matchers } from "@emotion/jest";

import { render, fireEvent } from "../../test-utils";
import Pokemons from "../../src/components/Pokemons";

expect.extend(matchers);

HTMLCanvasElement.prototype.getContext = () => {
  // return whatever getContext has to return
};

jest.mock("../../src/lib");

const pokemons = {
  results: [
    {
      __typename: "PokemonItem",
      id: 1,
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      __typename: "PokemonItem",
      id: 2,
      url: "https://pokeapi.co/api/v2/pokemon/2/",
      name: "ivysaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      __typename: "PokemonItem",
      id: 3,
      url: "https://pokeapi.co/api/v2/pokemon/3/",
      name: "venusaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    {
      __typename: "PokemonItem",
      id: 4,
      url: "https://pokeapi.co/api/v2/pokemon/4/",
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      __typename: "PokemonItem",
      id: 5,
      url: "https://pokeapi.co/api/v2/pokemon/5/",
      name: "charmeleon",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
  ],
};

describe("Pokemons", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test("renders the component", () => {
    const element = render(
      <Pokemons pokemons={pokemons} fetchMore={jest.fn()} />
    );

    expect(element).toMatchSnapshot();
  });

  test("renders the pokemons", () => {
    const { getByText } = render(
      <Pokemons pokemons={pokemons} fetchMore={jest.fn()} />
    );

    expect(getByText("bulbasaur")).toMatchSnapshot();
    expect(getByText("ivysaur")).toMatchSnapshot();
    expect(getByText("venusaur")).toMatchSnapshot();
    expect(getByText("charmander")).toMatchSnapshot();
    expect(getByText("charmeleon")).toMatchSnapshot();
  });

  test("runs fetchMore function", () => {
    const fetchMore = jest.fn();
    const { getByText } = render(
      <Pokemons pokemons={pokemons} fetchMore={fetchMore} />
    );

    const button = getByText("Load more");

    fireEvent.click(button);

    expect(fetchMore).toHaveBeenCalledTimes(1);
    expect(fetchMore).toHaveBeenCalledWith({ variables: { offset: 5 } });
  });
});
