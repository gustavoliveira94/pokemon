import { useSelector } from 'react-redux';

import { pokemonsSelector } from 'core/store/slices/pokemons';

export const useSearchPokemons = () => {
  const { pokemons } = useSelector(pokemonsSelector);

  return {
    pokemons,
  };
};
