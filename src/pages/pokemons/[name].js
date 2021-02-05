import React from "react";

import { gql, useQuery } from "@apollo/client";
import PokemonDetail from "../../components/PokemonDetail";

const GET_POKEMON_DATA = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      sprites {
        front_default
        back_default
      }
      abilities {
        ability {
          url
          name
        }
      }
      types {
        type {
          name
          url
        }
      }
    }
  }
`;

const PokemonDetailPage = ({ name }) => {
  const { error, data } = useQuery(GET_POKEMON_DATA, {
    variables: {
      name,
    },
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    return null;
  }

  if (data) {
    return <PokemonDetail pokemonData={data.pokemon} />;
  }
  return null;
};

export default PokemonDetailPage;

export const getServerSideProps = (context) => {
  const { name } = context.query;
  return {
    props: {
      name,
    },
  };
};
