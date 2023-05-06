import Divide from 'app/components/Modal/common/Divide';

import { typesColors } from 'core/utils/typesColorsPokemon';

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
            const color = typesColors[type as keyof typeof typesColors];

            return (
              <S.Type color={color} key={type}>
                {type}
              </S.Type>
            );
          })}
        </S.Types>
      }
    />
  );
};

export default FieldType;
