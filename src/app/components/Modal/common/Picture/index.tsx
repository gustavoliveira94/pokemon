import camera from 'app/assets/images/camera.png';

import * as S from './styled';

interface PictureProps {
  image?: string;
  content?: JSX.Element;
  error?: boolean;
}

const Picture: React.FC<PictureProps> = ({ image, content, error }) => {
  return (
    <S.Wrapper bgImage={image ? undefined : camera} error={error}>
      {!image ? content : <img src={image} alt="pokemon" />}
    </S.Wrapper>
  );
};

export default Picture;
