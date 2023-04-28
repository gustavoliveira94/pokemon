import React from 'react';
import { Route, BrowserRouter, Routes as Switch } from 'react-router-dom';

import MapPage from 'pages/Map';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<MapPage />} path="/map" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
