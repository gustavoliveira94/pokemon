import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'app/components/Button';
import { useSearchPokemons } from 'core/hooks/useSearchPokemons';
import { useSearchPokemon } from 'core/hooks/useSearchPokemon';
import { openModal } from 'core/store/slices/modal';

import iconPlus from 'app/assets/images/plus.png';

import * as S from './styled';

const Sidebar: React.FC = () => {
  const { pokemons } = useSearchPokemons();
  const { selectPokemon } = useSearchPokemon();
  const dispatch = useDispatch();

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {pokemons.map((pokemon) => {
          const image = pokemon.image ? (
            <img src={pokemon.image} alt="pokemon" />
          ) : (
            '?'
          );

          return (
            <S.SideBarItem
              onClick={() => {
                dispatch(openModal({ open: true, name: 'Edit' }));
                selectPokemon({ id: pokemon.id });
              }}
              key={Math.random()}
            >
              {image}
            </S.SideBarItem>
          );
        })}
      </S.SideBarList>

      <Button onClick={() => ''} icon={iconPlus} />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
