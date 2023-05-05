import { render as renderComponent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'core/store';

export const render = (component: JSX.Element) => {
  return {
    ...renderComponent(
      <BrowserRouter>
        <Provider store={store}>{component}</Provider>
      </BrowserRouter>,
    ),
  };
};
