import { render } from 'config/tests/helper';

import Divide from 'app/components/Modal/common/Divide';

describe('Testing component <Divide /> ', () => {
  it('Should click capture button', () => {
    const { getByText } = render(
      <Divide title="Pokemon" content={<h2>Pokemons</h2>} />,
    );

    expect(getByText('Pokemon'));
    expect(getByText('Pokemons'));
  });
});
