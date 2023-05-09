import { lazy } from 'react';

import close from 'app/assets/images/close.png';

import { useModal } from 'core/hooks/useModal';

import * as S from './styled';

const CaptureModal = lazy(() => import('./Types/Capture'));
const StatusModal = lazy(() => import('./Types/Status'));
const CreateModal = lazy(() => import('./Types/Create'));

interface ModalProps {
  content: JSX.Element;
  open: boolean;
}

export const ModalComponent: React.FC<ModalProps> = ({ content, open }) => {
  const { closeModal } = useModal();

  return (
    <S.Wrapper open={open} data-testid="modal">
      <S.Container>
        <S.Close data-testid="close-modal" onClick={() => closeModal()}>
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
