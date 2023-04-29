import * as S from './styled';

interface DivideProps {
  title: string;
  content?: JSX.Element;
}

const Divide: React.FC<DivideProps> = ({ title, content }) => {
  return (
    <>
      <S.Wrapper>
        <hr />
        <span>{title}</span>
      </S.Wrapper>
      {content}
    </>
  );
};

export default Divide;
