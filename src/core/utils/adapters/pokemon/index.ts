import { IPokemon } from 'contracts/interfaces/pokemon';

export interface IPokemonAdapter {
  id: number;
  name: string;
  height: string;
  weight: string;
  image: string;
  hp: string | undefined;
  abilities: string;
  stats: {
    name: string;
    value: string;
  }[];
  types: string[];
}

export const pokemonAdapter = (data: IPokemon): IPokemonAdapter => {
  return {
    id: Math.random(),
    name: data.name,
    height: String(data.height),
    weight: String(data.weight),
    image: data.sprites.front_default,
    hp: String(data.stats.find((stat) => stat.stat.name === 'hp')?.base_stat),
    abilities: data.abilities.map((ability) => ability.ability.name).join(', '),
    stats: data.stats.map((stat) => {
      return {
        name: stat.stat.name,
        value: String(stat.base_stat),
      };
    }),
    types: data.types.map((type) => type.type.name),
  };
};
