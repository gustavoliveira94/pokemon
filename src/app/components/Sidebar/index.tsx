import React from 'react';

import Button from 'app/components/Button';

import iconPlus from 'app/assets/images/plus.png';

import * as S from './styled';

const Sidebar: React.FC = () => (
  <S.SideBarWrapper>
    <S.SideBarList>
      <S.SideBarItem>?</S.SideBarItem>
    </S.SideBarList>

    <Button onClick={() => ''} icon={iconPlus} />
  </S.SideBarWrapper>
);

export default Sidebar;
