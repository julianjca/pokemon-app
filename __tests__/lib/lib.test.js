import {
  makeSentenceCase,
  countPokemon,
  uniqBy,
  getCatchingOdds,
} from "../../src/lib";

global.Math.random = () => 1;

describe("lib", () => {
  test("makeSentenceCase", () => {
    expect(makeSentenceCase("abc def")).toEqual("Abc Def");
  });

  test("countPokemon", () => {
    expect(
      countPokemon(
        [{ pokemonName: "bulbasaur", pokemonNickname: "robert" }],
        "bulbasaur"
      )
    ).toEqual(1);
  });

  test("uniqBy", () => {
    expect(
      uniqBy(
        [
          { pokemonName: "bulbasaur", pokemonNickname: "robert" },
          { pokemonName: "bulbasaur", pokemonNickname: "robert" },
        ],
        JSON.stringify
      )
    ).toEqual([{ pokemonName: "bulbasaur", pokemonNickname: "robert" }]);
  });

  test("getCatchingOdds", () => {
    const isCatched = getCatchingOdds();

    expect(isCatched).toBeTruthy();
  });
});
