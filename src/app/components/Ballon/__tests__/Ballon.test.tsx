import { render } from '@testing-library/react';

import { Ballon } from 'app/components/Ballon';

describe('Testing component <Ballon /> ', () => {
  it('Should render correctly', () => {
    const { getByTestId } = render(<Ballon.Search />);

    expect(getByTestId('ballon-search')).toBeInTheDocument();
  });

  it('Should render correctly', () => {
    const { getByTestId } = render(<Ballon.Searching />);

    expect(getByTestId('ballon-searching')).toBeInTheDocument();
  });

  it('Should render correctly', () => {
    const { getByTestId } = render(<Ballon.Error />);

    expect(getByTestId('ballon-error')).toBeInTheDocument();
  });
});
