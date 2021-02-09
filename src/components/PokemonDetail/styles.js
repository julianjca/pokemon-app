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
    width: 300px;
    height: 300px;
  }
`;

export const PokemonName = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
`;

export const CatchPokemonButton = styled.div`
  position: fixed;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
`;

export const AttributesGrid = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 40px auto 0;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const AttributesTitle = styled.h4`
  font-weight: 600;
  font-size: 1.2rem;
`;
