import Divide from 'app/components/Modal/common/Divide';

import { IPokemonAdapter } from 'contracts/adapters/pokemon';

import * as S from './styled';

interface FieldTypeProps {
  types: IPokemonAdapter['types'];
}

const FieldType: React.FC<FieldTypeProps> = ({ types }) => {
  return (
    <Divide
      title="TIPO"
      content={
        <S.Type>
          {types.map((type) => {
            return <p key={type}>{type}</p>;
          })}
        </S.Type>
      }
    />
  );
};

export default FieldType;
