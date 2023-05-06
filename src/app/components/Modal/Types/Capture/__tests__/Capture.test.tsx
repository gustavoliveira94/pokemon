import { fireEvent } from '@testing-library/react';
import { render } from 'config/tests/helper';

import { Modal } from 'app/components/Modal';

const capturePokemon = jest.fn();

jest.mock('core/hooks/useCapturePokemon', () => ({
  useCapturePokemon: () => ({
    capturePokemon,
  }),
}));

describe('Testing component <Modal.Capture /> ', () => {
  it('Should click capture button', () => {
    const { getByTestId } = render(<Modal.Capture open />);

    const captureButton = getByTestId('button-capture');
    fireEvent.click(captureButton);

    expect(capturePokemon).toBeCalledTimes(1);
  });
});
