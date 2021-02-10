/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "../../test-utils";
import Button from "../../src/components/Button";

describe("Button", () => {
  test("renders the right text", () => {
    const { getByText } = render(<Button>Click me</Button>);

    expect(getByText("Click me")).toBeInTheDocument();
  });

  test("runs onClick function", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByText("Click me");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
