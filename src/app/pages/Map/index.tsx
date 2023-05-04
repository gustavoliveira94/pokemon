import React from 'react';
import { useSelector } from 'react-redux';

import Sidebar from 'app/components/Sidebar';
import { Person } from 'app/components/Person';
import { Modal } from 'app/components/Modal';

import { modalSelector } from 'core/store/slices/modal';

import { pokemonsSelector } from 'core/store/slices/pokemons';
import * as S from './styled';

const MapPage: React.FC = () => {
  const { name: modalName, open } = useSelector(modalSelector);
  const { pokemons } = useSelector(pokemonsSelector);

  const statusPerson =
    pokemons.filter((pokemon) => pokemon).length < 6 ? 'Search' : 'Error';

  const person = {
    Search: <Person.Search />,
    Searching: <Person.Searching />,
    Error: <Person.Error />,
    '': null,
  };

  const modal = {
    Capture: <Modal.Capture open={open} />,
    Edit: <Modal.Edit open={open} />,
    Create: <Modal.Create open={open} />,
    '': null,
  };

  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <S.Playground>{person[statusPerson]}</S.Playground>
      {modal[modalName]}
    </S.MapWrapper>
  );
};

export default MapPage;
