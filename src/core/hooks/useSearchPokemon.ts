import { useDispatch, useSelector } from 'react-redux';

import {
  pokemonSelector,
  setPokemon,
  setLoading,
  selectPokemon as pokemonSelect,
} from 'core/store/slices/pokemons';

import { openModal } from 'core/store/slices/modal';
import { pokemonAdapter } from 'contracts/adapters/pokemon';

import httpClient from 'core/services/httpClient';
import { IPokemon } from 'contracts/interfaces/pokemon';

export const useSearchPokemon = () => {
  const dispatch = useDispatch();
  const { pokemon, loading } = useSelector(pokemonSelector);

  const selectPokemon = ({ id }: { id: number }) => {
    dispatch(pokemonSelect({ id }));
  };

  const searchPokemon = async () => {
    const randomPokemon = Math.floor(Math.random() * 807 + 1);

    setLoading({ loading: true });

    try {
      const data = await httpClient.get<IPokemon>(`/pokemon/${randomPokemon}`);

      dispatch(setPokemon(pokemonAdapter(data)));
      dispatch(openModal({ open: true, name: 'Capture' }));
    } catch (e) {
      dispatch(setLoading({ loading: false }));
    }
  };

  return {
    searchPokemon,
    loading,
    pokemon,
    selectPokemon,
  };
};
