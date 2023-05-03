import pokeball from 'app/assets/images/pokeball.png';

import { useSearchPokemon } from 'core/hooks/useSearchPokemon';
import { useCapturePokemon } from 'core/hooks/useCapturePokemon';

import FieldType from '../../common/FieldType';
import FieldAbilities from '../../common/FieldAbilities';

import Stats from '../../common/Stats';
import Picture from '../../common/Picture';

import * as S from './styled';

const CaptureModal: React.FC = () => {
  const { pokemon } = useSearchPokemon();
  const { capturePokemon } = useCapturePokemon();

  return (
    <>
      <Picture image={pokemon.image} />
      <S.Wrapper>
        <S.Name>{pokemon.name}</S.Name>
        <Stats
          hp={pokemon.hp || '-'}
          height={pokemon.height}
          weight={pokemon.weight}
        />
        <FieldType types={pokemon.types} />
        <FieldAbilities abilities={pokemon.abilities} />
        <S.Pokeball>
          <img src={pokeball} alt="pokeball" onClick={() => capturePokemon()} />
        </S.Pokeball>
      </S.Wrapper>
    </>
  );
};

export default CaptureModal;
