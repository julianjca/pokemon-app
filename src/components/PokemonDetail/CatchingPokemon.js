import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Heading from "../Heading";
import { Spacing } from "../Shared";

const shake = keyframes`
  20% {
    transform: rotate(7deg);
  }
  
  40% {
    transform: rotate(-14deg);
  }
  
  60% {
    transform: rotate(4deg);
  }
  
  80% {
    transform: rotate(-2deg);
  }
  
  100% {
    transform: rotate(0deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PokeballWrapper = styled.div`
  animation: ${shake} 1s infinite ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CatchingPokemon = () => {
  return (
    <Wrapper>
      <Spacing margin="0 0 20px 0">
        <Heading size="xl">Catching pokemon</Heading>
      </Spacing>
      <PokeballWrapper>
        <Image
          src="/pokeball.png"
          alt="catching pokemon"
          height={60}
          width={60}
        />
      </PokeballWrapper>
    </Wrapper>
  );
};

export default CatchingPokemon;
