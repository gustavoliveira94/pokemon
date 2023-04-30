import { IPokemon } from 'contracts/interfaces/pokemon';

export interface IPokemonAdapter {
  name: string;
  height: number;
  weight: number;
  image: string;
  hp: number | undefined;
  abilities: string;
  stats: {
    name: string;
    value: number;
  }[];
  types: string[];
}

export const pokemonAdapter = (data: IPokemon): IPokemonAdapter => {
  return {
    name: data.name,
    height: data.height,
    weight: data.weight,
    image: data.sprites.front_default,
    hp: data.stats.find((stat) => stat.stat.name === 'hp')?.base_stat,
    abilities: data.abilities.map((ability) => ability.ability.name).join(', '),
    stats: data.stats.map((stat) => {
      return {
        name: stat.stat.name,
        value: stat.base_stat,
      };
    }),
    types: data.types.map((type) => type.type.name),
  };
};
