import React from "react";

import PokemonCard from "./PokemonCard";
import { Grid } from "./styles";
import Button from "../Button";

const Pokemons = ({ pokemons, fetchMore }) => {
  return (
    <div
      style={{
        padding: "4rem 0",
      }}
    >
      <Grid>
        {pokemons.results.map((pokemon, key) => {
          return <PokemonCard key={key} {...pokemon} />;
        })}
      </Grid>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <Button
          onClick={() =>
            fetchMore({
              variables: {
                offset: pokemons.results.length,
              },
            })
          }
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default Pokemons;
