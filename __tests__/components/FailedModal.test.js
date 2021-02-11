/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "../../test-utils";
import FailedModal from "../../src/components/PokemonDetail/FailedModal";

describe("FailedModal", () => {
  test("renders the text correctly", () => {
    const { getByText } = render(<FailedModal />);

    expect(getByText("Oh no!")).toBeInTheDocument();
    expect(
      getByText("You have failed to catch this pokemon.")
    ).toBeInTheDocument();
    expect(getByText("Try Again!")).toBeInTheDocument();
  });

  test("runs onClick function", () => {
    const onClick = jest.fn();
    const { getByText } = render(<FailedModal onClick={onClick} />);

    const button = getByText("Try Again!");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
