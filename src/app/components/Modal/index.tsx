import close from 'app/assets/images/close.png';
import CaptureModal from './Types/Capture';

import * as S from './styled';

interface ModalProps {
  content: JSX.Element;
}

const ModalDefault: React.FC<ModalProps> = ({ content }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Close>
          <img src={close} alt="close-modal" />
        </S.Close>
        <S.Header>
          <S.Picture />
        </S.Header>
        <S.Content>{content}</S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export const Modal = {
  Capture: () => <ModalDefault content={<CaptureModal />} />,
  Edit: () => <ModalDefault content={<CaptureModal />} />,
};
