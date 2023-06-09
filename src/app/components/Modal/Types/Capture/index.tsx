import pokeball from 'app/assets/images/pokeball.png';

import { usePokemons } from 'core/hooks/usePokemons';
import { useCapturePokemon } from 'core/hooks/useCapturePokemon';

import FieldType from '../../common/FieldType';
import FieldAbilities from '../../common/FieldAbilities';

import Infos from '../../common/Infos';
import Picture from '../../common/Picture';

import * as S from './styled';

const CaptureModal: React.FC = () => {
  const { pokemon } = usePokemons();
  const { capturePokemon } = useCapturePokemon();

  return (
    <>
      <Picture image={pokemon.image} />
      <S.Wrapper data-testid="capture-modal">
        <S.Name>{pokemon.name}</S.Name>
        <Infos
          hp={pokemon.hp || '-'}
          height={pokemon.height}
          weight={pokemon.weight}
        />
        <FieldType types={pokemon?.types} />
        <FieldAbilities abilities={pokemon?.abilities} />
        <S.Pokeball>
          <img
            src={pokeball}
            data-testid="button-capture"
            alt="pokeball"
            onClick={() => capturePokemon()}
          />
        </S.Pokeball>
      </S.Wrapper>
    </>
  );
};

export default CaptureModal;
