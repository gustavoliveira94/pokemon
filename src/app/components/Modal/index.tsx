import close from 'app/assets/images/close.png';

import { useModal } from 'core/hooks/useModal';
import CaptureModal from './Types/Capture';
import StatusModal from './Types/Status';
import CreateModal from './Types/Create';

import * as S from './styled';

interface ModalProps {
  content: JSX.Element;
  open: boolean;
}

const ModalComponent: React.FC<ModalProps> = ({ content, open }) => {
  const { closeModal } = useModal();

  return (
    <S.Wrapper open={open}>
      <S.Container>
        <S.Close onClick={() => closeModal()}>
          <img src={close} alt="close-modal" />
        </S.Close>
        <S.Header />
        <S.Content>{content}</S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export const Modal = {
  Capture: ({ open }: Pick<ModalProps, 'open'>) => (
    <ModalComponent open={open} content={<CaptureModal />} />
  ),
  Status: ({ open }: Pick<ModalProps, 'open'>) => (
    <ModalComponent open={open} content={<StatusModal />} />
  ),
  Create: ({ open }: Pick<ModalProps, 'open'>) => (
    <ModalComponent open={open} content={<CreateModal />} />
  ),
};
