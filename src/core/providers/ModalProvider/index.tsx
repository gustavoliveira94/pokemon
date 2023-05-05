import { Modal } from 'app/components/Modal';
import { useModal } from 'core/hooks/useModal';

interface ModalProviderProps {
  children: JSX.Element;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const { open, modalName } = useModal();

  const modal = {
    Capture: <Modal.Capture open={open} />,
    Status: <Modal.Status open={open} />,
    Create: <Modal.Create open={open} />,
    '': null,
  };

  return (
    <>
      {children}
      {modal[modalName]}
    </>
  );
};

export default ModalProvider;
