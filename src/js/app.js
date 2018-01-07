import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Helper to replace a string character at {index}
String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index+character.length);
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);