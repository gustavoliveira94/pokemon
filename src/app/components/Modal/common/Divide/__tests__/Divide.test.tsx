import { render } from 'config/tests/helper';

import Divide from 'app/components/Modal/common/Divide';

describe('Testing component <Divide /> ', () => {
  it('Should render correctly', () => {
    const { getByText } = render(
      <Divide title="Pokemon" content={<h2>Pokemons</h2>} />,
    );

    expect(getByText('Pokemon')).toBeInTheDocument();
    expect(getByText('Pokemons')).toBeInTheDocument();
  });
});
