import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import Dashboard from './components/Dashboard';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/configureStore';
const store = configureStore();


const jsx =  (
  <Provider store={store}>
      <Dashboard />
  </Provider>
);
ReactDOM.render(jsx,
  document.getElementById('root')
);

serviceWorker.unregister();
