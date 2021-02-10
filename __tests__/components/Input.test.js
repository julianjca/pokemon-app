/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { matchers } from "@emotion/jest";

import { render, fireEvent } from "../../test-utils";
import Input from "../../src/components/Input";

expect.extend(matchers);

describe("Input", () => {
  test("renders the component", () => {
    const element = render(<Input />);

    expect(element).toMatchSnapshot();
  });

  test("runs onChange", () => {
    const onChange = jest.fn();
    const element = render(<Input onChange={onChange} value="value" />);
    fireEvent.change(element.container.querySelector("input"), {
      target: { value: "abc" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test("has the right value from props", () => {
    const onChange = jest.fn();
    const element = render(<Input onChange={onChange} value="value" />);

    expect(element.container.querySelector("input").value).toEqual("value");
  });
});
