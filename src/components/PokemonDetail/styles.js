import styled from "@emotion/styled";

export const PokemonDetailContainer = styled.div`
  padding: 4rem 0 8rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonImage = styled.div`
  /* width: 150px;
  height: 150px;
  overflow: hidden; */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    /* width: 250px;
    height: 250px; */

    img {
      width: 300px;
      height: 300px;
    }
  }
`;

export const PokemonName = styled.h1`
  font-size: 3rem;
  text-align: left;
  text-transform: capitalize;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
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
    display: flex;
    justify-content: space-between;
  }
`;

export const AttributesTitle = styled.h4`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const Tag = styled.div`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 12px 15px;
  border-radius: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.secondary};
  text-transform: capitalize;
  font-weight: 700;
`;

export const RadarChartWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 90%;
    margin-top: 0;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const Left = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 45%;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 0.8rem;
`;
