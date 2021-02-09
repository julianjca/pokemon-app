import styled from "@emotion/styled";

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  height: 180px;
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.1 all ease-in-out;

  &:hover {
    transform: translateY(-3px);
    transition: 0.1s all ease-in-out;
  }
`;

export const Pokeball = styled.img`
  position: absolute;
  opacity: 0.08;
  bottom: -58px;
  right: -60px;
  height: 200px;
`;

export const PokemonName = styled.div`
  font-family: Inter;
  font-weight: 700;
  text-transform: capitalize;
`;
