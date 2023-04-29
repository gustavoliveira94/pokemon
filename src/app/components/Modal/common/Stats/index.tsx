import * as S from './styled';

const Stats: React.FC = () => {
  return (
    <S.Wrapper>
      <div>
        <small>HP</small>
        <p>45/45</p>
      </div>
      <div>
        <small>ALTURA</small>
        <p>45/45</p>
      </div>
      <div>
        <small>PESO</small>
        <p>45/45</p>
      </div>
    </S.Wrapper>
  );
};

export default Stats;
