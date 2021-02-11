/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { matchers } from "@emotion/jest";

import { render, fireEvent } from "../../test-utils";
import Modal from "../../src/components/Modal";

expect.extend(matchers);

describe("Input", () => {
  test("renders the component", () => {
    const element = render(<Modal />);

    expect(element).toMatchSnapshot();
  });

  test("renders children", () => {
    const element = render(
      <Modal>
        <div>children element</div>
      </Modal>
    );

    expect(element.getByText("children element")).toBeInTheDocument();
  });

  test("not running handleCloseModal when the children is clicked", () => {
    const handleCloseModal = jest.fn();
    const element = render(
      <Modal handleCloseModal={handleCloseModal}>
        <div>children element</div>
      </Modal>
    );

    const modalCard = element.getByTestId("modal-card");
    fireEvent.click(modalCard);

    expect(handleCloseModal).not.toHaveBeenCalled();
  });
});
