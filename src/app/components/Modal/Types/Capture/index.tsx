import pokeball from 'app/assets/images/pokeball.png';

import { useSearchPokemon } from 'core/hooks/useSearchPokemon';
import { useCapturePokemon } from 'core/hooks/useCapturePokemon';

import Stats from '../../common/Stats';
import Divide from '../../common/Divide';
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
        <Divide
          title="TIPO"
          content={
            <S.Type>
              {pokemon.types.map((type) => {
                return <p key={type}>{type}</p>;
              })}
            </S.Type>
          }
        />
        <Divide
          title="HABILIDADES"
          content={
            <S.Abilities>
              <p>{pokemon.abilities}</p>
            </S.Abilities>
          }
        />
        <S.Pokeball>
          <img src={pokeball} alt="pokeball" onClick={() => capturePokemon()} />
        </S.Pokeball>
      </S.Wrapper>
    </>
  );
};

export default CaptureModal;
