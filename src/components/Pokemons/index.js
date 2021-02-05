import React from "react";

import { gql, useQuery } from "@apollo/client";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      # count
      # next
      # previous
      # status
      # message
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
      limit: 10,
      offset: 0,
    },
    fetchPolicy: "cache-and-network",
  });

  // if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {JSON.stringify(data)}
      <button
        onClick={() =>
          fetchMore({
            variables: {
              offset: data.pokemons.results.length,
            },
          })
        }
      >
        load more
      </button>
    </div>
  );
};

export default Pokemons;
