import { Ballon } from 'app/components/Ballon';

import { usePokemons } from 'core/hooks/usePokemons';
import { usePersonStatus } from 'core/hooks/usePersonStatus';

import * as S from './styled';

interface PersonProps {
  ballon: JSX.Element;
}

export const PersonComponent: React.FC<PersonProps> = ({ ballon }) => {
  const { searchPokemon, loading, pokemons } = usePokemons();
  const { personMove } = usePersonStatus();

  const handleSearchPokemon = () => {
    return pokemons.filter((pokemon) => pokemon).length < 6
      ? searchPokemon()
      : null;
  };

  return (
    <S.Person
      loading={loading}
      onClick={() => handleSearchPokemon()}
      data-testid="person"
    >
      {ballon}
      {personMove}
    </S.Person>
  );
};

export const Person = {
  Search: () => <PersonComponent ballon={<Ballon.Search />} />,
  Searching: () => <PersonComponent ballon={<Ballon.Searching />} />,
  Error: () => <PersonComponent ballon={<Ballon.Error />} />,
};
