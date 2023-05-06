import Divide from 'app/components/Modal/common/Divide';

import { IPokemonAdapter } from 'core/utils/adapters/pokemon';

import * as S from './styled';

interface FieldAbilitiesProps {
  abilities: IPokemonAdapter['abilities'];
}

const FieldAbilities: React.FC<FieldAbilitiesProps> = ({ abilities }) => {
  return (
    <Divide
      title="HABILIDADES"
      content={
        <S.Abilities>
          <p>{abilities}</p>
        </S.Abilities>
      }
    />
  );
};

export default FieldAbilities;
