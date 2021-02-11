/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "../../test-utils";
import Home from "../../src/pages/index";
import { MockedProvider } from "@apollo/client/testing";
import { GET_POKEMONS } from "../../src/queries/Pokemons";

const mocks = [
  {
    request: {
      query: GET_POKEMONS,
      variables: {
        limit: 30,
        offset: 0,
      },
    },
    result: {
      data: {
        pokemons: {
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
        },
      },
    },
  },
];

describe("Home", () => {
  test("renders the right text", async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(getByText("bulbasaur")).toBeInTheDocument();
  });
});
