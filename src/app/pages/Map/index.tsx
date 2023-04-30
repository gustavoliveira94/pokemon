import React from 'react';
import { useSelector } from 'react-redux';

import Sidebar from 'app/components/Sidebar';
import { Person } from 'app/components/Person';
import { Modal } from 'app/components/Modal';

import { modalSelector } from 'core/store/slices/modal';

import * as S from './styled';

const MapPage: React.FC = () => {
  const { name: modalName, open } = useSelector(modalSelector);

  const modal = {
    Capture: <Modal.Capture open={open} />,
    Edit: <Modal.Edit open={open} />,
    '': null,
  };

  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <S.Playground>
        <Person.Search />
      </S.Playground>
      {modal[modalName]}
    </S.MapWrapper>
  );
};

export default MapPage;
