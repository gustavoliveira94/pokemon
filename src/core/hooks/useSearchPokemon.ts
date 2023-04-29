import { useState } from 'react';

import httpClient from 'core/services/httpClient';

export const useSearchPokemon = () => {
  const [pokemon, setPokemon] = useState({} as any);
  const [loading, setLoading] = useState(false);

  const searchPokemon = async () => {
    const randomPokemon = Math.floor(Math.random() * 807 + 1);

    setLoading(true);
    try {
      const data = await httpClient.get(`/pokemon/${randomPokemon}`);

      setLoading(true);
      return setPokemon(data);
    } catch (e) {
      setLoading(false);
      return null;
    }
  };

  return {
    searchPokemon,
    pokemon,
    loading,
  };
};
