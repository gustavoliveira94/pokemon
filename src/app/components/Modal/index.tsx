import { useDispatch } from 'react-redux';

import close from 'app/assets/images/close.png';
import { closeModal } from 'core/store/slices/modal';

import CaptureModal from './Types/Capture';
import EditModal from './Types/Edit';
import CreateModal from './Types/Create';

import * as S from './styled';

interface ModalProps {
  content: JSX.Element;
  open: boolean;
}

const ModalComponent: React.FC<ModalProps> = ({ content, open }) => {
  const dispatch = useDispatch();

  return (
    <S.Wrapper open={open}>
      <S.Container>
        <S.Close onClick={() => dispatch(closeModal())}>
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
  Edit: ({ open }: Pick<ModalProps, 'open'>) => (
    <ModalComponent open={open} content={<EditModal />} />
  ),
  Create: ({ open }: Pick<ModalProps, 'open'>) => (
    <ModalComponent open={open} content={<CreateModal />} />
  ),
};
