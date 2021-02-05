import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
