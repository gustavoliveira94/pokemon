import { render } from 'config/tests/helper';

import MapPage from 'app/pages/Map';

describe('Testing component <MapPage /> ', () => {
  it('Should render correctly', () => {
    const { getByTestId } = render(<MapPage />);

    expect(getByTestId('sidebar')).toBeInTheDocument();
    expect(getByTestId('person')).toBeInTheDocument();
  });
});
