import * as S from './styled';

interface StatsProps {
  weight: string;
  height: string;
  hp: string;
}

const Stats: React.FC<StatsProps> = ({ height, hp, weight }) => {
  const formatWeight = (Number(weight) * 10 ** -2).toFixed(2);
  const formatHeight = (Number(height) * 10 ** -1).toFixed(2);

  return (
    <S.Wrapper>
      <div>
        <small>HP</small>
        <p>
          {hp}/{hp}
        </p>
      </div>
      <div>
        <small>ALTURA</small>
        <p>{formatHeight} m</p>
      </div>
      <div>
        <small>PESO</small>
        <p>{formatWeight} kg</p>
      </div>
    </S.Wrapper>
  );
};

export default Stats;
