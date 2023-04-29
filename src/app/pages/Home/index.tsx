import React from 'react';
import { Link } from 'react-router-dom';

import pokemonLogo from 'app/assets/images/pokemonLogo.png';

import Button from 'app/components/Button';

import * as S from './styled';

const HomePage: React.FC = () => (
  <S.HomeWrapper>
    <img src={pokemonLogo} alt="logo pokemon" />
    <Link to="/map">
      <Button text="START" />
    </Link>
  </S.HomeWrapper>
);

export default HomePage;
