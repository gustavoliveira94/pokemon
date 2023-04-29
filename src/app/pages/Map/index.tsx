import React from 'react';

import Sidebar from 'app/components/Sidebar';
import Person from 'app/features/Person';
import { Modal } from 'app/components/Modal';

import * as S from './styled';

const MapPage: React.FC = () => {
  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <S.Playground>
        <Person statusBallon="searching" />
      </S.Playground>
      <Modal.Capture />
    </S.MapWrapper>
  );
};

export default MapPage;
