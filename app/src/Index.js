import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import VehicleLoader from './components/VehicleLoader';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/vehicles" component={VehicleLoader} />
    </Route>
  </Router>), document.getElementById('content')
);
