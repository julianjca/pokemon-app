import React from "react";
import { Card, ModalWindow } from "./styles";

const Modal = ({ children, handleCloseModal }) => {
  return (
    <ModalWindow onClick={handleCloseModal}>
      <Card onClick={(e) => e.stopPropagation()}>{children}</Card>
    </ModalWindow>
  );
};

export default Modal;
