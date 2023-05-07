import { useState } from 'react';

import { usePokemons } from 'core/hooks/usePokemons';
import { useDropPokemon } from 'core/hooks/useDropPokemon';
import { useEditPokemon } from 'core/hooks/useEditPokemon';

import editName from 'app/assets/images/editIcon.png';
import checkIcon from 'app/assets/images/checkIcon.png';
import closeIcon from 'app/assets/images/close.png';

import Button from 'app/components/Button';
import InputText from 'app/components/InputText';

import FieldType from '../../common/FieldType';
import FieldAbilities from '../../common/FieldAbilities';
import FieldStats from '../../common/FieldStats';

import Infos from '../../common/Infos';
import Picture from '../../common/Picture';

import * as S from './styled';

const StatusModal: React.FC = () => {
  const { pokemon } = usePokemons();
  const { dropPokemon } = useDropPokemon();
  const { editPokemon } = useEditPokemon();

  const [name, setName] = useState('');
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Picture image={pokemon.image} />
      <S.Wrapper data-testid="status-modal">
        {edit ? (
          <S.EditName data-testid="edit-name">
            <InputText
              type="text"
              placeholder="Nome"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              onlyIcon
              icon={checkIcon}
              onClick={() => {
                editPokemon({ id: pokemon.id, name });
                setEdit(false);
              }}
            />
            <Button
              onlyIcon
              icon={closeIcon}
              onClick={() => {
                setName('');
                setEdit(false);
              }}
            />
          </S.EditName>
        ) : (
          <S.Name>
            {pokemon.name}
            <img
              src={editName}
              alt="edit-name-icon"
              data-testid="button-edit-name"
              onClick={() => setEdit(true)}
            />
          </S.Name>
        )}
        <Infos
          hp={pokemon.hp || '-'}
          height={pokemon.height}
          weight={pokemon.weight}
        />
        <FieldType types={pokemon.types} />
        <FieldAbilities abilities={pokemon.abilities} />
        <FieldStats statsValue={pokemon.stats} />

        <S.DropPokemon>
          <Button
            text="LIBERAR POKEMON"
            onClick={() => dropPokemon({ id: pokemon.id })}
          />
        </S.DropPokemon>
      </S.Wrapper>
    </>
  );
};

export default StatusModal;
