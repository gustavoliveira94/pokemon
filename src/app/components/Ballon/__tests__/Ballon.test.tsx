import { render } from '@testing-library/react';

import { Ballon } from 'app/components/Ballon';

describe('Testing component <Ballon /> ', () => {
  it('Should render correctly', () => {
    const { getByTestId } = render(<Ballon.Search />);

    expect(getByTestId('ballon')).toBeInTheDocument();
  });
});
