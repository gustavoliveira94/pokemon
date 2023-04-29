import pokeball from 'app/assets/images/pokeball.png';

import Stats from '../../common/Stats';
import Divide from '../../common/Divide';

import * as S from './styled';

const CaptureModal: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Name>BULBASAUR</S.Name>
      <Stats />
      <Divide
        title="TIPO"
        content={
          <S.Type>
            <p>PLANTA</p>
            <p>VENENO</p>
          </S.Type>
        }
      />
      <Divide
        title="HABILIDADES"
        content={
          <S.Abilities>
            <p>Overglow, Clorofila</p>
          </S.Abilities>
        }
      />
      <Divide title="ESTATÍSTICAS" />
      <S.Pokeball>
        <img src={pokeball} alt="pokeball" />
      </S.Pokeball>
    </S.Wrapper>
  );
};

export default CaptureModal;
