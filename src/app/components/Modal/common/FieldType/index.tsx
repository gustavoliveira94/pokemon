import Divide from 'app/components/Modal/common/Divide';

import { typesColors } from 'core/utils/typesColorsPokemon';
import { typesPokemons } from 'core/utils/translates/typesPokemons';

import { IPokemonAdapter } from 'core/utils/adapters/pokemon';

import * as S from './styled';

interface FieldTypeProps {
  types: IPokemonAdapter['types'];
}

const FieldType: React.FC<FieldTypeProps> = ({ types }) => {
  return (
    <Divide
      title="TIPO"
      content={
        <S.Types>
          {types?.map((type) => {
            const color =
              typesColors[
                typesPokemons[
                  type?.toLowerCase() as keyof typeof typesPokemons
                ]?.toLowerCase() as keyof typeof typesColors
              ];

            const name =
              typesPokemons[type?.toLowerCase() as keyof typeof typesPokemons];

            return (
              <S.Type color={color} key={type}>
                {name}
              </S.Type>
            );
          })}
        </S.Types>
      }
    />
  );
};

export default FieldType;
