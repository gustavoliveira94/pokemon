import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getPokemon } from 'core/states/slices/pokemon';

import httpClient from 'core/services/httpClient';

export const useSearchPokemon = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const searchPokemon = async () => {
    const randomPokemon = Math.floor(Math.random() * 807 + 1);

    setLoading(true);
    try {
      const data = await httpClient.get(`/pokemon/${randomPokemon}`);

      dispatch(getPokemon(data));
    } catch (e) {
      setLoading(false);
      return null;
    }
  };

  return {
    searchPokemon,
    loading,
  };
};
