import React, { useEffect, createContext, useReducer } from "react";

import { ADD_POKEMON, RELEASE_POKEMON, SET_POKEMONS } from "../constants";

const PokemonStateContext = createContext();
const PokemonDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POKEMON: {
      const pokemons = [...state.pokemons].concat(action.pokemon);
      localStorage.setItem("pokemons", JSON.stringify(pokemons));
      return { pokemons };
    }
    case RELEASE_POKEMON: {
      return {
        pokemons: [...state.pokemons].filter(
          (pokemon) =>
            pokemon.pokemonName !== action.pokemonName &&
            pokemon.pokemonNickname !== action.pokemonNickname
        ),
      };
    }
    case SET_POKEMONS: {
      return { pokemons: action.pokemons };
    }
    default:
      console.log("error");
  }
};

const PokemonStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    pokemons: [],
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      const pokemons = localStorage.getItem("pokemons");
      if (pokemons) {
        dispatch({
          type: "SET_POKEMONS",
          pokemons: JSON.parse(pokemons),
        });
      }
    }
  }, []);

  return (
    <PokemonStateContext.Provider value={state}>
      <PokemonDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonStateContext.Provider>
  );
};

const usePokemonState = () => {
  const context = React.useContext(PokemonStateContext);

  return context;
};

const usePokemonDispatch = () => {
  const context = React.useContext(PokemonDispatchContext);

  return context;
};

export { PokemonStateProvider, usePokemonState, usePokemonDispatch };
