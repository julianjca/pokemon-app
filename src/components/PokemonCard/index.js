import React from "react";

import { Card } from "./styles";

const PokemonCard = ({ name, image }) => {
  return (
    <Card>
      <img src={image} alt={name} />
      <div>{name}</div>
    </Card>
  );
};

export default PokemonCard;
