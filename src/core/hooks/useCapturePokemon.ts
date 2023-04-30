import { useDispatch } from 'react-redux';

import { capturePokemon as capture } from 'core/store/slices/pokemons';

import { openModal } from 'core/store/slices/modal';

export const useCapturePokemon = () => {
  const dispatch = useDispatch();

  const capturePokemon = async () => {
    dispatch(capture());
    dispatch(openModal({ open: false, name: '' }));
  };

  return {
    capturePokemon,
  };
};
