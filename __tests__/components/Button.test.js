/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "../../test-utils";
import Button from "../../src/components/Button";

describe("Button", () => {
  test("renders the right text", () => {
    const { getByText } = render(<Button>Click me</Button>);

    expect(getByText("Click me")).toBeInTheDocument();
  });
});
