import React from 'react';
import { Route, BrowserRouter, Routes as Switch } from 'react-router-dom';

import MapPage from 'pages/Map';
import HomePage from 'pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<MapPage />} path="/map" />
        <Route element={<HomePage />} path="/*" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
