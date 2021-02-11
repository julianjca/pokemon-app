/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "../../test-utils";
import CatchingPokemon from "../../src/components/PokemonDetail/CatchingPokemon";

describe("CatchingPokemon", () => {
  test("renders the text correctly", () => {
    const { getByText, getByAltText } = render(<CatchingPokemon />);

    expect(getByText("Catching pokemon")).toBeInTheDocument();
    expect(getByAltText("catching pokemon")).toBeInTheDocument();
  });
});
