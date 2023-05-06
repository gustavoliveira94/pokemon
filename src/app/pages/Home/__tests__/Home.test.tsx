import { render } from 'config/tests/helper';

import HomePage from 'app/pages/Home';

describe('Testing component <HomePage /> ', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<HomePage />);

    expect(getByText('START'));
  });
});
