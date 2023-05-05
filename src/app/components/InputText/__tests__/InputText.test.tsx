import { render } from '@testing-library/react';

import InputText from 'app/components/InputText';

describe('Testing component <InputText /> ', () => {
  it('Should render correctly', () => {
    const onChange = jest.fn();

    const { getByTestId } = render(
      <InputText onChange={onChange} value="pokemon" />,
    );

    expect(getByTestId('input')).toHaveValue('pokemon');
  });

  it('Should render label and error', () => {
    const onChange = jest.fn();

    const { getByText } = render(
      <InputText
        onChange={onChange}
        label="pokemon"
        error="pokemon is required"
      />,
    );

    expect(getByText('pokemon')).toBeInTheDocument();
    expect(getByText('pokemon is required')).toBeInTheDocument();
  });
});
