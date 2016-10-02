import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/vehicles">Vehicles</Link>
    </header>
    <section>
      {children || 'Welcome to React Starterify'}
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
