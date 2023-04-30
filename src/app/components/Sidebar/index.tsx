import React from 'react';

import Button from 'app/components/Button';
import { useSearchPokemons } from 'core/hooks/useSearchPokemons';

import iconPlus from 'app/assets/images/plus.png';

import * as S from './styled';

const Sidebar: React.FC = () => {
  const { pokemons } = useSearchPokemons();

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {pokemons.map((pokemon) => {
          const image = pokemon.image ? (
            <img src={pokemon.image} alt="pokemon" />
          ) : (
            '?'
          );

          return <S.SideBarItem key={Math.random()}>{image}</S.SideBarItem>;
        })}
      </S.SideBarList>

      <Button onClick={() => ''} icon={iconPlus} />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
