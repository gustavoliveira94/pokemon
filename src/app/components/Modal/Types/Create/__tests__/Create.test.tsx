import { fireEvent, waitFor, act } from '@testing-library/react';
import { render } from 'config/tests/helper';

import { Modal } from 'app/components/Modal';

const createPokemon = jest.fn();

jest.mock('core/hooks/useCreatePokemon', () => ({
  useCreatePokemon: () => ({
    createPokemon,
  }),
}));

describe('Testing component <Modal.Create /> ', () => {
  it('Should not call createPokemon', () => {
    const { getByRole } = render(<Modal.Create open />);

    const createButton = getByRole('button', {
      name: /criar pokemon/i,
    });
    fireEvent.click(createButton);

    expect(createPokemon).toBeCalledTimes(0);
  });

  it('Should show errors', async () => {
    const { getByRole, getByText } = render(<Modal.Create open />);

    const createButton = getByRole('button', {
      name: /criar pokemon/i,
    });
    fireEvent.click(createButton);

    waitFor(() => {
      expect(getByText('Nome é um campo obrigatório!')).toBeInTheDocument();
      expect(getByText('HP é um campo obrigatório!')).toBeInTheDocument();
      expect(
        getByText('Peso de série é um campo obrigatório!'),
      ).toBeInTheDocument();
      expect(getByText('Altura é um campo obrigatório!')).toBeInTheDocument();
      expect(getByText('Tipo é um campo obrigatório!')).toBeInTheDocument();
      expect(
        getByText('Habilidade 1 é um campo obrigatório!'),
      ).toBeInTheDocument();
      expect(getByText('Defesa é um campo obrigatório!')).toBeInTheDocument();
      expect(getByText('Ataque é um campo obrigatório!')).toBeInTheDocument();
      expect(
        getByText('Defesa Especial é um campo obrigatório!'),
      ).toBeInTheDocument();
      expect(
        getByText('Ataque Especial é um campo obrigatório!'),
      ).toBeInTheDocument();
      expect(
        getByText('Velocidade é um campo obrigatório!'),
      ).toBeInTheDocument();
    });
  });

  it('Should not show errors', () => {
    const { queryByText } = render(<Modal.Create open />);

    expect(queryByText('Nome é um campo obrigatório!')).not.toBeInTheDocument();
    expect(queryByText('HP é um campo obrigatório!')).not.toBeInTheDocument();
    expect(
      queryByText('Peso de série é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Altura é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(queryByText('Tipo é um campo obrigatório!')).not.toBeInTheDocument();
    expect(
      queryByText('Habilidade 1 é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Defesa é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Ataque é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Defesa Especial é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Ataque Especial é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Velocidade é um campo obrigatório!'),
    ).not.toBeInTheDocument();
  });

  it('Should fill form and submit without errors', () => {
    const {
      getByPlaceholderText,
      getAllByPlaceholderText,
      getAllByTestId,
      getByTestId,
      queryByText,
    } = render(<Modal.Create open />);

    global.URL.createObjectURL = jest.fn();

    const file = new File(['pikachu.png'], { type: 'image/png' } as any);
    fireEvent.change(getByTestId(/image-input/i), {
      target: { files: file },
    });
    fireEvent.change(getByPlaceholderText(/nome/i), {
      target: { value: 'pokemon' },
    });
    fireEvent.change(getByPlaceholderText(/HP/i), {
      target: { value: '20' },
    });
    fireEvent.change(getByPlaceholderText(/Peso/i), {
      target: { value: '10' },
    });
    fireEvent.change(getByPlaceholderText(/Altura/i), {
      target: { value: '30' },
    });
    fireEvent.change(getByPlaceholderText(/Altura/i), {
      target: { value: '30' },
    });

    fireEvent.mouseDown(document.querySelector('.MuiSelect-select')!);

    act(() => {
      const option = getAllByTestId('option')[1];
      fireEvent.mouseDown(option);
      option.click();
    });

    fireEvent.change(getByPlaceholderText(/Habilidade 2/i), {
      target: { value: 'Habilidade 2' },
    });
    fireEvent.change(getByPlaceholderText(/Habilidade 3/i), {
      target: { value: 'Habilidade 3' },
    });
    fireEvent.change(getByPlaceholderText(/Habilidade 4/i), {
      target: { value: 'Habilidade 3' },
    });
    fireEvent.change(getAllByPlaceholderText(/00/i)[0], {
      target: { value: '20' },
    });
    fireEvent.change(getAllByPlaceholderText(/00/i)[0], {
      target: { value: '10' },
    });
    fireEvent.change(getAllByPlaceholderText(/00/i)[0], {
      target: { value: '50' },
    });
    fireEvent.change(getAllByPlaceholderText(/00/i)[0], {
      target: { value: '100' },
    });
    fireEvent.change(getAllByPlaceholderText(/00/i)[0], {
      target: { value: '120' },
    });

    fireEvent.click(getByTestId('button'));

    // expect(createPokemon).toBeCalledTimes(1);

    expect(queryByText('Nome é um campo obrigatório!')).not.toBeInTheDocument();
    expect(queryByText('HP é um campo obrigatório!')).not.toBeInTheDocument();
    expect(
      queryByText('Peso de série é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Altura é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(queryByText('Tipo é um campo obrigatório!')).not.toBeInTheDocument();
    expect(
      queryByText('Habilidade 1 é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Defesa é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Ataque é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Defesa Especial é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Ataque Especial é um campo obrigatório!'),
    ).not.toBeInTheDocument();
    expect(
      queryByText('Velocidade é um campo obrigatório!'),
    ).not.toBeInTheDocument();
  });
});
