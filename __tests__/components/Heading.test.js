/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { matchers } from "@emotion/jest";

import { render } from "../../test-utils";
import Heading from "../../src/components/Heading";

expect.extend(matchers);

describe("Heading", () => {
  test("renders the right children", () => {
    const { getByText } = render(<Heading>I am a heading.</Heading>);

    expect(getByText("I am a heading.")).toBeInTheDocument();
  });

  test("renders the right styles for size xxl", () => {
    const element = render(<Heading size="xxl">I am a heading.</Heading>);

    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-weight",
      "bold"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "color",
      "inherit"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-size",
      "2.25rem"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-size",
      "3rem",
      {
        media: "(min-width: 720px)",
      }
    );
  });

  test("renders the right styles for size xl", () => {
    const element = render(<Heading size="xl">I am a heading.</Heading>);

    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-weight",
      "bold"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "color",
      "inherit"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-size",
      "1.875rem"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-size",
      "2.25rem",
      {
        media: "(min-width: 720px)",
      }
    );
  });

  test("renders the right styles for size lg", () => {
    const element = render(<Heading size="lg">I am a heading.</Heading>);

    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-weight",
      "bold"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "color",
      "inherit"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-size",
      "1.5rem"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-size",
      "1.875rem",
      {
        media: "(min-width: 720px)",
      }
    );
  });

  test("renders the right styles for size md", () => {
    const element = render(<Heading size="md">I am a heading.</Heading>);

    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-weight",
      "bold"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "color",
      "inherit"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-size",
      "1.25rem"
    );
  });

  test("renders the right styles for size sm", () => {
    const element = render(<Heading size="sm">I am a heading.</Heading>);

    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-weight",
      "bold"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "color",
      "inherit"
    );
    expect(element.getByText("I am a heading.")).toHaveStyleRule(
      "font-size",
      "1rem"
    );
  });
});
