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
      [value.pokemonName]: (acc[value.pokemonName] || 0) + 1,
    }),
    {}
  )[name];
};

export const uniqBy = (arr, key) => {
  const seen = {};

  return arr.filter((item) => {
    const k = key(item);
    return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  });
};

export const getCatchingOdds = () => {
  return getCatchingOdds;
};
