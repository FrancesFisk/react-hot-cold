import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Game from './components/game';
import store from './store';

import './reset.css';
import './index.css';

ReactDOM.render(
  //   When the Provider is in palce, components can access parts of the store including the dispatch method, using the connect method.
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
