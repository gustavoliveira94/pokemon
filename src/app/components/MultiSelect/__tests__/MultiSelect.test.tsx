import { fireEvent, act } from '@testing-library/react';

import { render } from 'config/tests/helper';

import MultiSelect from 'app/components/MultiSelect';

describe('Testing component <MultiSelect /> ', () => {
  it('Should open and click on value', () => {
    const { getByText, getByRole, getAllByTestId } = render(
      <MultiSelect
        options={[
          {
            text: 'fogo',
            value: 'fogo',
          },
          {
            text: 'água',
            value: 'água',
          },
        ]}
      />,
    );

    fireEvent.mouseDown(getByRole('button'));

    act(() => {
      const option = getAllByTestId('option')[1];
      fireEvent.mouseDown(option);
      option.click();
    });

    expect(getByText('água')).toBeInTheDocument();
  });
});
