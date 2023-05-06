import { fireEvent, act } from '@testing-library/react';

import { render } from 'config/tests/helper';

import MultiSelect from 'app/components/MultiSelect';

describe('Testing component <MultiSelect /> ', () => {
  it('Should open and click on value', () => {
    const { getByText, getByRole, getByTestId } = render(
      <MultiSelect
        options={[
          {
            text: 'fogo',
            value: 'fogo',
          },
        ]}
      />,
    );

    fireEvent.mouseDown(getByRole('button'));

    act(() => {
      const option = getByTestId('option');
      fireEvent.mouseDown(option);
      option.click();
    });

    expect(getByText('fogo')).toBeInTheDocument();
  });
});
