import { fireEvent } from '@testing-library/react';
import { render } from 'config/tests/helper';

import Sidebar from 'app/components/Sidebar';

import pokemonsData from './pokemons.json';

let openModal = jest.fn();

jest.mock('core/hooks/useModal', () => ({
  useModal: () => ({
    openModal,
  }),
}));

let pokemons = pokemonsData;
let selectPokemon = jest.fn();

jest.mock('core/hooks/usePokemons', () => ({
  usePokemons: () => ({
    selectPokemon,
    pokemons,
  }),
}));

describe('Testing component <Sidebar /> ', () => {
  it('Should render 6 items', () => {
    const { getAllByTestId } = render(<Sidebar />);

    expect(getAllByTestId('sidebar-item')).toHaveLength(6);
  });

  it('Should not call selectPokemon', () => {
    pokemons = ['', '', '', '', '', ''] as any;
    selectPokemon = jest.fn();

    const { getAllByTestId } = render(<Sidebar />);

    const item = getAllByTestId('sidebar-item')[0];

    fireEvent.click(item);

    expect(selectPokemon).toBeCalledTimes(0);
  });

  it('Should call selectPokemon', () => {
    selectPokemon = jest.fn();
    pokemons = pokemonsData;

    const { getAllByTestId } = render(<Sidebar />);

    const item = getAllByTestId('sidebar-item')[0];

    fireEvent.click(item);

    expect(selectPokemon).toBeCalledTimes(1);
  });

  it('Should not call openModal', () => {
    openModal = jest.fn();

    const { getByRole } = render(<Sidebar />);

    const addButton = getByRole('button');

    fireEvent.click(addButton);

    expect(openModal).toBeCalledTimes(0);
  });

  it('Should call openModal', () => {
    openModal = jest.fn();
    pokemons = [];

    const { getByRole } = render(<Sidebar />);

    const addButton = getByRole('button');

    fireEvent.click(addButton);

    expect(openModal).toBeCalledTimes(1);
  });
});
