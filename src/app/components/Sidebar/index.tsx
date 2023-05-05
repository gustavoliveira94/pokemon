import React from 'react';

import Button from 'app/components/Button';
import { useSearchPokemons } from 'core/hooks/useSearchPokemons';
import { useSearchPokemon } from 'core/hooks/useSearchPokemon';

import iconPlus from 'app/assets/images/plus.png';

import { useModal } from 'core/hooks/useModal';

import * as S from './styled';

const Sidebar: React.FC = () => {
  const { pokemons } = useSearchPokemons();
  const { selectPokemon } = useSearchPokemon();
  const { openModal } = useModal();

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {pokemons.map((pokemon) => {
          const image = pokemon.image ? (
            <img src={pokemon.image} alt="pokemon" />
          ) : (
            '?'
          );

          const click = pokemon.name
            ? () => {
                openModal('Status');
                selectPokemon({ id: pokemon.id });
              }
            : undefined;

          return (
            <S.SideBarItem onClick={click} key={Math.random()}>
              {image}
            </S.SideBarItem>
          );
        })}
      </S.SideBarList>

      <Button onClick={() => openModal('Create')} icon={iconPlus} />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
