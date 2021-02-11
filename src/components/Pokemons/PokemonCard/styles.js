import styled from "@emotion/styled";

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.1 all ease-in-out;
  background: #ffffff;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 10px 10px 0;
  height: 160px;
  width: 160px;

  & > span {
    font-size: 0.9rem;
    margin-top: 2px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 180px;
    width: 180px;
    margin: 0 15px 15px 0;
  }

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
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: bold;
  text-transform: capitalize;
`;
