import { render } from 'config/tests/helper';

import Picture from 'app/components/Modal/common/Picture';

describe('Testing component <Picture /> ', () => {
  it('Should render error', () => {
    const { getByTestId } = render(<Picture error />);

    expect(getByTestId('picture')).toHaveStyle('border: 4px solid #FF3D71');
  });

  it('Should render content', () => {
    const { getByText } = render(<Picture content={<h2>Picture</h2>} />);

    expect(getByText('Picture')).toBeInTheDocument();
  });

  it('Should render image', () => {
    const { getByTestId } = render(<Picture image="picture" />);

    expect(getByTestId('picture-image')).toBeInTheDocument();
  });
});
