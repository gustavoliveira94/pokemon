import React from 'react';

import Sidebar from 'app/components/Sidebar';

import { usePersonStatus } from 'core/hooks/usePersonStatus';

import * as S from './styled';

const MapPage: React.FC = () => {
  const { personStatus } = usePersonStatus();

  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <S.Playground>{personStatus()}</S.Playground>
    </S.MapWrapper>
  );
};

export default MapPage;
