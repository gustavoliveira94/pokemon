import { render } from 'config/tests/helper';

import FieldAbilities from 'app/components/Modal/common/FieldAbilities';

describe('Testing component <FieldAbilities /> ', () => {
  it('Should click capture button', () => {
    const { getByText } = render(<FieldAbilities abilities="fogo, voador" />);

    expect(getByText('fogo, voador'));
  });
});
