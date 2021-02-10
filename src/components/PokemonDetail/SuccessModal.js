import React, { useState, useCallback } from "react";

import Heading from "../Heading";
import Input from "../Input";
import { Spacing } from "../Shared";
import Button from "../Button";
import { usePokemonState } from "../../context";
import { ErrorMessage } from "./styles";

const SuccessModal = ({ onClick, pokemonName }) => {
  const [pokemonNickname, setPokemonNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const state = usePokemonState();

  const handleSubmit = useCallback(() => {
    const pokemonIndex = state.pokemons.findIndex(
      (pokemon) =>
        pokemon.pokemonName === pokemonName &&
        pokemonNickname === pokemon.pokemonNickname
    );

    if (pokemonIndex === -1) {
      onClick(pokemonNickname);
      setErrorMessage(null);
      return;
    }

    setErrorMessage("Nickname should be unique.");
  }, [onClick, pokemonNickname, pokemonName, state.pokemons]);

  return (
    <div>
      <Heading size="xl">Congratulations!</Heading>
      <Heading
        as="h3"
        size="md"
        style={{
          fontWeight: 500,
          marginTop: "10px",
        }}
      >
        You have successfully catched this pokemon.
      </Heading>
      <Heading
        as="p"
        size="sm"
        style={{
          marginTop: "10px",
          fontWeight: 400,
        }}
      >
        Give it a name:
      </Heading>
      <Spacing margin="20px 0 0">
        <Input
          value={pokemonNickname}
          onChange={(e) => setPokemonNickname(e.target.value)}
          fullWidth
          type="text"
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Spacing>
      <Spacing margin="20px 0 0">
        <Button onClick={handleSubmit} fullWidth>
          Save!
        </Button>
      </Spacing>
    </div>
  );
};

export default SuccessModal;
