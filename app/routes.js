import React from 'react';
import {Route, IndexRoute} from 'react-router'
import App from '../app/components/App'
import Dashboard from '../app/components/Dash'
import Home from '../app/components/User/home'
import Settings from '../app/components/User/settings'
import AddRecipe from '../app/containers/AddRecipe'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/dashboard" component={Dashboard}>
      <IndexRoute component={AddRecipe} />
      <Route path="/recipe/create" component={AddRecipe} />
      <Route path="/user/home" component={Home}/>
      <Route path="/user/settings" component={Settings}/>
    </Route>
  </Route>
);