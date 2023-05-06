import { fireEvent } from '@testing-library/react';
import { render } from 'config/tests/helper';

import { ModalComponent, Modal } from 'app/components/Modal';

const closeModal = jest.fn();

jest.mock('core/hooks/useModal', () => ({
  useModal: () => ({
    closeModal,
  }),
}));

const capturePokemon = jest.fn();

jest.mock('core/hooks/useCapturePokemon', () => ({
  useCapturePokemon: () => ({
    capturePokemon,
  }),
}));

describe('Testing component <Modal /> ', () => {
  it('Should render correctly', () => {
    const { getByText } = render(
      <ModalComponent open content={<h1>Modal</h1>} />,
    );

    getByText('Modal');
  });

  it('Should click close button', () => {
    const { getByTestId } = render(
      <ModalComponent open content={<h1>Modal</h1>} />,
    );

    const closeButton = getByTestId('close-modal');
    fireEvent.click(closeButton);

    expect(closeModal).toBeCalledTimes(1);
  });

  it('Should render capture modal', () => {
    const { getByTestId } = render(<Modal.Capture open />);

    expect(getByTestId('capture-modal')).toBeInTheDocument();
  });

  it('Should render status status', () => {
    const { getByTestId } = render(<Modal.Status open />);

    expect(getByTestId('status-modal')).toBeInTheDocument();
  });

  it('Should render create modal', () => {
    const { getByTestId } = render(<Modal.Create open />);

    expect(getByTestId('create-modal')).toBeInTheDocument();
  });
});
