import { waitFor, fireEvent } from '@testing-library/react';
import { render } from 'config/tests/helper';

import { Person } from 'app/components/Person';

import pokemonsData from './pokemons.json';

let loading = false;
const searchPokemon = jest.fn();

jest.mock('core/hooks/useSearchPokemon', () => ({
  useSearchPokemon: () => ({
    loading,
    searchPokemon,
  }),
}));

let pokemons = pokemonsData;

jest.mock('core/hooks/useSearchPokemons', () => ({
  useSearchPokemons: () => ({
    pokemons,
  }),
}));

describe('Testing component <Person /> ', () => {
  it('Should not call searchPokemon', () => {
    const { getByTestId } = render(<Person.Search />);

    const person = getByTestId('person');

    fireEvent.click(person);

    expect(searchPokemon).toBeCalledTimes(0);
  });

  it('Should call searchPokemon', () => {
    pokemons = [];

    const { getByTestId } = render(<Person.Search />);

    const person = getByTestId('person');

    fireEvent.click(person);

    expect(searchPokemon).toBeCalledTimes(1);
  });

  it('Should not render front person', () => {
    loading = true;

    const { queryByTestId } = render(<Person.Search />);

    waitFor(() =>
      expect(queryByTestId('front-person')).not.toBeInTheDocument(),
    );
  });

  it('Should render with Search Ballon', () => {
    const { getByTestId } = render(<Person.Search />);

    expect(getByTestId('ballon-search')).toBeInTheDocument();
  });

  it('Should render with Searching Ballon', () => {
    const { getByTestId } = render(<Person.Searching />);

    expect(getByTestId('ballon-searching')).toBeInTheDocument();
  });

  it('Should render with Error Ballon', () => {
    const { getByTestId } = render(<Person.Error />);

    expect(getByTestId('ballon-error')).toBeInTheDocument();
  });
});