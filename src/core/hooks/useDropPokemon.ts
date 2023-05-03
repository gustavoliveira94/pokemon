import { useDispatch } from 'react-redux';

import { dropPokemon as drop } from 'core/store/slices/pokemons';

import { openModal } from 'core/store/slices/modal';

interface dropPokemonProps {
  id: number;
}

export const useDropPokemon = () => {
  const dispatch = useDispatch();

  const dropPokemon = async ({ id }: dropPokemonProps) => {
    dispatch(drop({ id }));
    dispatch(openModal({ open: false, name: '' }));
  };

  return {
    dropPokemon,
  };
};
