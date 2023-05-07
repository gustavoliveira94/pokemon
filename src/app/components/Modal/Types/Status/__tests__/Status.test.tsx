import { fireEvent } from '@testing-library/react';
import { render } from 'config/tests/helper';

import Status from 'app/components/Modal/Types/Status';

import pokemons from './pokemons.json';

const dropPokemon = jest.fn();
jest.mock('core/hooks/useDropPokemon', () => ({
  useDropPokemon: () => ({
    dropPokemon,
  }),
}));

jest.mock('core/hooks/usePokemons', () => ({
  usePokemons: () => ({
    pokemon: pokemons[0],
  }),
}));

const editPokemon = jest.fn();

jest.mock('core/hooks/useEditPokemon', () => ({
  useEditPokemon: () => ({
    editPokemon,
  }),
}));

describe('Testing component <Status /> ', () => {
  it('Should drop pokemon', () => {
    const { getByRole } = render(<Status />);

    const buttonDropPokemon = getByRole('button', {
      name: /liberar pokemon/i,
    });

    fireEvent.click(buttonDropPokemon);

    expect(dropPokemon).toBeCalledTimes(1);
  });

  it('Should write new name and confirm', () => {
    const { getByPlaceholderText, getAllByTestId, getByTestId, getByText } =
      render(<Status />);

    expect(getByText('salamence')).toBeInTheDocument();

    const buttonEditName = getByTestId('button-edit-name');
    fireEvent.click(buttonEditName);

    const editNameInput = getByPlaceholderText(/nome/i);
    fireEvent.change(editNameInput, { target: { value: 'pokemon' } });

    expect(editNameInput).toHaveValue('pokemon');

    const buttonConfirmName = getAllByTestId('button')[0];
    fireEvent.click(buttonConfirmName);

    expect(editPokemon).toBeCalledTimes(1);
  });

  it('Should write new name and cancel', () => {
    const { getByPlaceholderText, getAllByTestId, getByTestId } = render(
      <Status />,
    );

    const buttonEditName = getByTestId('button-edit-name');
    fireEvent.click(buttonEditName);

    const editNameInput = getByPlaceholderText(/nome/i);
    fireEvent.change(editNameInput, { target: { value: 'pokemon' } });

    expect(editNameInput).toHaveValue('pokemon');

    const click = jest.fn();
    const buttonCancelName = getAllByTestId('button')[1];
    buttonCancelName.onclick = click;
    fireEvent.click(buttonCancelName);

    expect(click).toBeCalledTimes(1);
  });
});
