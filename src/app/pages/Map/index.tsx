import React from 'react';
import { useSelector } from 'react-redux';

import Sidebar from 'app/components/Sidebar';
import { Person } from 'app/components/Person';

import { pokemonSelector, pokemonsSelector } from 'core/store/slices/pokemons';
import * as S from './styled';

const MapPage: React.FC = () => {
  const { pokemons } = useSelector(pokemonsSelector);
  const { loading } = useSelector(pokemonSelector);

  const statusPerson =
    // eslint-disable-next-line no-nested-ternary
    loading
      ? 'Searching'
      : pokemons.filter((pokemon) => pokemon).length < 6
      ? 'Search'
      : 'Error';

  const person = {
    Search: <Person.Search />,
    Searching: <Person.Searching />,
    Error: <Person.Error />,
    '': null,
  };

  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <S.Playground>{person[statusPerson]}</S.Playground>
    </S.MapWrapper>
  );
};

export default MapPage;
