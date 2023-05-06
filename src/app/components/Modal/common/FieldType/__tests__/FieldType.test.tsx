import { render } from 'config/tests/helper';

import FieldType from 'app/components/Modal/common/FieldType';

import { typesPokemons } from 'core/utils/translates/typesPokemons';

const types = Object.entries(typesPokemons).map((type) => {
  return type[0];
});

describe('Testing component <FieldType /> ', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<FieldType types={types} />);

    expect(getByText('Fogo'));
    expect(getByText('Voador'));
  });
});
