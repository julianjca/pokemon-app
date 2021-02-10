/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "../../test-utils";
import Header from "../../src/components/Header";

jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

describe("Header", () => {
  test("renders the right text", () => {
    const { getByText, getByAltText } = render(<Header />);

    expect(getByAltText("Pokemon")).toBeInTheDocument();
    expect(getByText("My Pokemons")).toBeInTheDocument();
  });
});
