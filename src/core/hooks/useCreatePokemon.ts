import { useDispatch } from 'react-redux';

import { createPokemon as create } from 'core/store/slices/pokemons';
import { IPokemonAdapter } from 'core/utils/adapters/pokemon';

export const useCreatePokemon = () => {
  const dispatch = useDispatch();

  const createPokemon = (pokemon: IPokemonAdapter) => {
    dispatch(create(pokemon));
  };

  return {
    createPokemon,
  };
};
