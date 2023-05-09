import { lazy, Suspense } from 'react';

import { useModal } from 'core/hooks/useModal';

const ModalCapture = lazy(() =>
  import('app/components/Modal').then((modal) => {
    return {
      default: modal.Modal.Capture,
    };
  }),
);

const ModalStatus = lazy(() =>
  import('app/components/Modal').then((modal) => {
    return {
      default: modal.Modal.Status,
    };
  }),
);

const ModalCreate = lazy(() =>
  import('app/components/Modal').then((modal) => {
    return {
      default: modal.Modal.Create,
    };
  }),
);

interface ModalProviderProps {
  children: JSX.Element;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const { open, modalName } = useModal();

  const modal = {
    Capture: <ModalCapture open={open} />,
    Status: <ModalStatus open={open} />,
    Create: <ModalCreate open={open} />,
    '': null,
  };

  return (
    <>
      {children}
      <Suspense>{modal[modalName]}</Suspense>
    </>
  );
};

export default ModalProvider;
