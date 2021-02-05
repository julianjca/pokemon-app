import React from "react";

import { gql, useQuery } from "@apollo/client";

import PokemonCard from "../PokemonCard";
import { Grid } from "./styles";
import Button from "../Button";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        url
        name
        image
      }
    }
  }
`;

const Pokemons = () => {
  const { error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: {
      limit: 20,
      offset: 0,
    },
    fetchPolicy: "cache-and-network",
  });

  // if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div
      style={{
        padding: "4rem 0",
      }}
    >
      {data && (
        <>
          <Grid>
            {data.pokemons.results.map((pokemon, key) => {
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
                    offset: data.pokemons.results.length,
                  },
                })
              }
            >
              Load more
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Pokemons;
