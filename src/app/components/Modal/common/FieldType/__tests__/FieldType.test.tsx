import { render } from 'config/tests/helper';

import FieldType from 'app/components/Modal/common/FieldType';

describe('Testing component <FieldType /> ', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<FieldType types={['fogo', 'voador']} />);

    expect(getByText('fogo'));
    expect(getByText('voador'));
  });
});
