/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "../../test-utils";
import SuccessModal from "../../src/components/PokemonDetail/SuccessModal";

describe("SuccessModal", () => {
  test("renders the text correctly", () => {
    const element = render(<SuccessModal />);

    expect(element).toMatchSnapshot();
  });

  test("runs submit function after filling pokemonNickname", () => {
    const onClick = jest.fn();
    const element = render(
      <SuccessModal onClick={onClick} pokemonName="bulbasaur" />
    );

    const input = element.container.querySelector("input");

    fireEvent.change(input, { target: { value: "robert" } });

    const button = element.getByText("Save!");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith("robert");
  });
});
