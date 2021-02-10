import React, { useState } from "react";

import Heading from "../Heading";
import Input from "../Input";
import { Spacing } from "../Shared";
import Button from "../Button";

const SuccessModal = ({ onClick }) => {
  const [pokemonNickname, setPokemonNickname] = useState("");

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
      </Spacing>
      <Spacing margin="20px 0 0">
        <Button onClick={() => onClick(pokemonNickname)} fullWidth>
          Save!
        </Button>
      </Spacing>
    </div>
  );
};

export default SuccessModal;
