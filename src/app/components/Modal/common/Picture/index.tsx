import camera from 'app/assets/images/camera.png';

import * as S from './styled';

interface PictureProps {
  image?: string;
  content?: JSX.Element;
  error?: boolean;
}

const Picture: React.FC<PictureProps> = ({ image, content, error }) => {
  return (
    <S.Wrapper
      bgImage={image ? undefined : camera}
      error={error}
      data-testid="picture"
    >
      {image ? (
        <img src={image} alt="pokemon" data-testid="picture-image" />
      ) : (
        content
      )}
    </S.Wrapper>
  );
};

export default Picture;
