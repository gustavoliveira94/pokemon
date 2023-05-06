import { IPokemonAdapter } from '../pokemon';

export interface IInputCreatePokemonAdapter {
  name: string;
  height: string;
  weight: string;
  image: string;
  hp: string;
  abilityOne: string;
  abilityTwo: string;
  abilityThree: string;
  abilityFour: string;
  stats: {
    defense: string;
    attack: string;
    'special-attack': string;
    'special-defense': string;
    speed: string;
  };
  types: string[];
}

export const createPokemonAdapter = (
  data: IInputCreatePokemonAdapter,
): IPokemonAdapter => {
  return {
    id: Math.random(),
    name: data.name,
    height: data.height,
    weight: data.weight,
    image: data.image,
    hp: data.hp,
    abilities: [
      data.abilityOne,
      data.abilityTwo,
      data.abilityThree,
      data.abilityFour,
    ]
      .filter((ability) => ability)
      .join(','),
    stats: Object.entries(data.stats).map((stat) => {
      return {
        name: stat[0],
        value: stat[1],
      };
    }),
    types: data.types,
  };
};
