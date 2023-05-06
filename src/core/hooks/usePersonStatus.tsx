import { Person } from 'app/components/Person';
import { useSearchPokemons } from './useSearchPokemons';
import { useSearchPokemon } from './useSearchPokemon';

const person = {
  Search: <Person.Search />,
  Searching: <Person.Searching />,
  Error: <Person.Error />,
  '': null,
};

export const usePersonStatus = () => {
  const { pokemons } = useSearchPokemons();
  const { loading } = useSearchPokemon();

  const personStatus = () => {
    if (loading) {
      return person.Searching;
    }

    if (pokemons.filter((pokemon) => pokemon).length < 6) {
      return person.Search;
    }

    return person.Error;
  };

  return {
    personStatus,
  };
};
