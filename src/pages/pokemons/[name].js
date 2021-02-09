import React from "react";
import Head from "next/head";

import { gql, useQuery } from "@apollo/client";
import PokemonDetail from "../../components/PokemonDetail";
import { makeSentenceCase } from "../../lib";

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
      stats {
        base_stat
        effort
        stat {
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
    return (
      <>
        <Head>
          <title>{makeSentenceCase(data.pokemon.name)}</title>
        </Head>
        <PokemonDetail pokemonData={data.pokemon} />
      </>
    );
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
