import styled from "@emotion/styled";

export const ModalWindow = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.div`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background: ${(props) => props.theme.colors.background};
  padding: 30px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  width: 95%;
  max-width: 350px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 500px;
  }
`;
