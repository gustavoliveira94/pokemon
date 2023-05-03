import { useDispatch } from 'react-redux';

import { editPokemon as edit } from 'core/store/slices/pokemons';

interface editPokemonProps {
  id: number;
  name: string;
}

export const useEditPokemon = () => {
  const dispatch = useDispatch();

  const editPokemon = async ({ id, name }: editPokemonProps) => {
    dispatch(edit({ id, name }));
  };

  return {
    editPokemon,
  };
};
