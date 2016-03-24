import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import routes from './routes'
import cookApp from './reducers/index'

let store = createStore(cookApp)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);

