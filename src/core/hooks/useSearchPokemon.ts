import { useState } from 'react';

import httpClient from 'infra/protocols/httpClient';

export const useSearchPokemon = () => {
  const [pokemon, setPokemon] = useState({} as any);
  const [loading, setLoading] = useState(false);

  const searchPokemon = async () => {
    setLoading(true);
    try {
      const data = await httpClient.get('/pokemon/10');

      setLoading(true);
      return setPokemon(data);
    } catch (e) {
      setLoading(true);
      return null;
    }
  };

  return {
    searchPokemon,
    pokemon,
    loading,
  };
};
