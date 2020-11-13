import React from 'react';
import { Route, Switch } from "react-router-dom";

import { HomeContainer, CaptureContainer } from './Containers';

import './App.css';
function App() {
  return (
    <Switch>
      <Route path="/capture" component={CaptureContainer} />
      <Route path="/" component={HomeContainer} />
    </Switch>
  );
}

export default App;
