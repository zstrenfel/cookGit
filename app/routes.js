import React from 'react';
import {Route, IndexRoute} from 'react-router'
import App from '../app/components/App'
import Dashboard from '../app/components/Dash'
import Home from '../app/components/User/home'
import Settings from '../app/components/User/settings'


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/dashboard" component={Dashboard}>
      <Route path="/user/home" component={Home}/>
      <Route path="/user/settings" component={Settings}/>
    </Route>
  </Route>
);

export default routes