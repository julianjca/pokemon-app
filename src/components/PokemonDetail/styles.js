import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonImage = styled.img`
  width: 45%;
  height: auto;

  @media (min-width: 720px) {
    width: 150px;
    height: 150px;
  }
`;

export const PokemonName = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-transform: capitalize;
`;
