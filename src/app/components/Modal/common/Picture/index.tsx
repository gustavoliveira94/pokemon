import * as S from './styled';

interface PictureProps {
  image?: string;
}

const Picture: React.FC<PictureProps> = ({ image }) => {
  return (
    <S.Wrapper>
      <img src={image} alt="pokemon" />
    </S.Wrapper>
  );
};

export default Picture;
