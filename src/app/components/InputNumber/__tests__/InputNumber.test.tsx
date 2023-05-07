import { fireEvent } from '@testing-library/react';

import { render } from 'config/tests/helper';

import InputNumber from 'app/components/InputNumber';

describe('Testing component <InputNumber /> ', () => {
  it('Should render without errors', () => {
    const onChange = jest.fn();

    const { getByTestId } = render(
      <InputNumber onChange={onChange} placeholder="Test" />,
    );

    expect(getByTestId('input-number')).toBeInTheDocument();
  });

  it('Should render a label', () => {
    const onChange = jest.fn();

    const { getByText } = render(
      <InputNumber onChange={onChange} label="Test label" placeholder="Test" />,
    );

    expect(getByText('Test label')).toBeInTheDocument();
  });

  it('Should render a suffix', () => {
    const onChange = jest.fn();

    const { getByText } = render(
      <InputNumber onChange={onChange} suffix="kg" placeholder="Test" />,
    );

    expect(getByText('kg')).toBeInTheDocument();
  });

  it('Should increase the value on clicking increase arrow', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <InputNumber value="2" onChange={onChange} placeholder="Test" />,
    );

    const increaseArrow = getByTestId('increase');
    fireEvent.click(increaseArrow);
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it('Should decrease the value on clicking decrease arrow', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <InputNumber value="2" onChange={onChange} placeholder="Test" />,
    );

    const decreaseArrow = getByTestId('decrease');
    fireEvent.click(decreaseArrow);
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('Should decrease on 0 value', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <InputNumber value="0" onChange={onChange} placeholder="Test" />,
    );

    const decreaseArrow = getByTestId('decrease');
    fireEvent.click(decreaseArrow);
    expect(onChange).toBeCalledTimes(0);
  });
});
