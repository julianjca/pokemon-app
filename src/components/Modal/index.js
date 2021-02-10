import React from "react";
import { Card, ModalWindow } from "./styles";

const Modal = ({ children }) => {
  return (
    <ModalWindow>
      <Card>{children}</Card>
    </ModalWindow>
  );
};

export default Modal;
