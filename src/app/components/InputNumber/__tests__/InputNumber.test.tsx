import { fireEvent } from '@testing-library/react';

import { render } from 'config/tests/helper';

import InputNumber from 'app/components/InputNumber';

describe('Testing component <InputNumber /> ', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<InputNumber placeholder="Test" />);
    expect(getByTestId('input-number')).toBeInTheDocument();
  });

  it('renders a label', () => {
    const { getByText } = render(
      <InputNumber label="Test label" placeholder="Test" />,
    );
    expect(getByText('Test label')).toBeInTheDocument();
  });

  it('renders a suffix', () => {
    const { getByText } = render(
      <InputNumber suffix="kg" placeholder="Test" />,
    );
    expect(getByText('kg')).toBeInTheDocument();
  });

  it('increases the value on clicking increase arrow', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <InputNumber value="2" onChange={onChange} placeholder="Test" />,
    );
    const increaseArrow = getByTestId('increase');
    fireEvent.click(increaseArrow);
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it('decreases the value on clicking decrease arrow', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <InputNumber value="2" onChange={onChange} placeholder="Test" />,
    );
    const decreaseArrow = getByTestId('decrease');
    fireEvent.click(decreaseArrow);
    expect(onChange).toHaveBeenCalledWith(1);
  });
});
