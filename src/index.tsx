import React from 'react';
import ReactDOM from 'react-dom';

import { AppProviders } from 'Providers/AppProviders';

import { App } from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
