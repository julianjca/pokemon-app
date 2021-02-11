import { gql } from "@apollo/client";

export const GET_POKEMON_DATA = gql`
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
