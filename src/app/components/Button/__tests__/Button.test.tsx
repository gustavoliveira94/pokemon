import { render, fireEvent } from '@testing-library/react';

import chevron from 'app/assets/images/chevronDownBlack.png';

import Button from 'app/components/Button';

describe('Testing component <Button /> ', () => {
  it('Should render correctly', () => {
    const { getByTestId, getByText } = render(
      <Button text="Button" icon={chevron} type="submit" />,
    );

    expect(getByText('Button')).toBeInTheDocument();
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('Should render only icon', () => {
    const { getByTestId, queryByText } = render(
      <Button text="Button" icon={chevron} onlyIcon />,
    );

    expect(queryByText('Button')).not.toBeInTheDocument();
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('Should render click button', () => {
    const onClick = jest.fn();

    const { getByRole } = render(<Button text="Button" onClick={onClick} />);

    const button = getByRole('button', {
      name: /Button/i,
    });

    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
