import React from "react";
import { Card, ModalWindow } from "./styles";

const Modal = ({ children, handleCloseModal }) => {
  return (
    <ModalWindow onClick={handleCloseModal}>
      <Card data-testid="modal-card" onClick={(e) => e.stopPropagation()}>
        {children}
      </Card>
    </ModalWindow>
  );
};

export default Modal;
