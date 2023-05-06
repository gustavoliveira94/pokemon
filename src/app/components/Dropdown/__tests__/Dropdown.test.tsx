import { render } from '@testing-library/react';

import Dropdown from 'app/components/Dropdown';

describe('Testing component <Dropdown /> ', () => {
  it('Should render correctly', () => {
    const { getByText } = render(
      <Dropdown
        label="Pokemons"
        options={[
          {
            text: 'pokemon',
            value: 'pokemon',
          },
        ]}
      />,
    );

    expect(getByText('Pokemons')).toBeInTheDocument();
    expect(getByText('pokemon')).toBeInTheDocument();
  });
});
