/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { matchers } from "@emotion/jest";

import { render } from "../../test-utils";
import PokemonCard from "../../src/components/Pokemons/PokemonCard";
import * as lib from "../../src/lib";

expect.extend(matchers);

HTMLCanvasElement.prototype.getContext = () => {
  // return whatever getContext has to return
};

jest.mock("../../src/lib");

describe("PokemonCard", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test("renders the component", () => {
    const element = render(<PokemonCard name="bulbasaur" />);

    expect(element).toMatchSnapshot();
  });

  test("renders pokemon data", () => {
    const { getByText } = render(<PokemonCard name="bulbasaur" />);

    expect(getByText("bulbasaur")).toBeInTheDocument();
  });

  test("renders pokemon count", () => {
    const countPokemon = jest.spyOn(lib, "countPokemon").mockReturnValueOnce(2);

    const { getByText } = render(<PokemonCard name="bulbasaur" />);

    expect(getByText("You have: 2")).toBeInTheDocument();

    countPokemon.mockRestore();
  });
});
