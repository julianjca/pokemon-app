import React from "react";

const PokemonStateContext = React.createContext();
const PokemonDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POKEMON": {
      return { pokemons: [...state.pokemons].concat(action.pokemon) };
    }
    case "REMOVE_POKEMON": {
      return { pokemons: state.count - 1 };
    }
    default:
      console.log("error");
  }
};

const PokemonStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { pokemons: [] });
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
