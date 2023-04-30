import { useDispatch } from 'react-redux';

import { setPokemons } from 'core/store/slices/pokemons';

import { openModal } from 'core/store/slices/modal';

export const useCapturePokemon = () => {
  const dispatch = useDispatch();

  const capturePokemon = async () => {
    dispatch(setPokemons());
    dispatch(openModal({ open: false, name: '' }));
  };

  return {
    capturePokemon,
  };
};
