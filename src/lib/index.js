export const makeSentenceCase = (str) => {
  return str
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(" ");
};

export const countPokemon = (pokemons, name) => {
  return pokemons.reduce(
    (acc, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1,
    }),
    {}
  )[name];
};
