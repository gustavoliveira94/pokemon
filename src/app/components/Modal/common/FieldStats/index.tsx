import Divide from 'app/components/Modal/common/Divide';

import { IPokemonAdapter } from 'contracts/adapters/pokemon';

import shieldIcon from 'app/assets/images/shield.png';
import swordIcon from 'app/assets/images/sword.png';
import speedIcon from 'app/assets/images/speed.png';

import * as S from './styled';

interface FieldStatsProps {
  statsValue: IPokemonAdapter['stats'];
}

const stats = [
  {
    icon: shieldIcon,
    title: 'Defesa',
    id: 'defense',
  },
  {
    icon: swordIcon,
    title: 'Ataque',
    id: 'attack',
  },
  {
    icon: shieldIcon,
    title: 'Defesa Especial',
    id: 'special-defense',
  },
  {
    icon: swordIcon,
    title: 'Ataque Especial',
    id: 'special-attack',
  },
  {
    icon: speedIcon,
    title: 'Velocidade',
    id: 'speed',
  },
];

const FieldStats: React.FC<FieldStatsProps> = ({ statsValue }) => {
  return (
    <Divide
      title="ESTATÍSTICAS"
      content={
        <S.Stats>
          <div className="items">
            {stats.map(({ icon, title, id }) => {
              const value = statsValue.find((stat) => stat.name === id)?.value;

              return (
                <S.Item key={id}>
                  <S.Icon>
                    <div>
                      <img src={icon} alt={title} onClick={() => ''} />
                    </div>
                    <p key={title}>{title}</p>
                  </S.Icon>
                  <S.Result>{value}</S.Result>
                </S.Item>
              );
            })}
          </div>
        </S.Stats>
      }
    />
  );
};

export default FieldStats;
