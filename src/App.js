import React from 'react';
import Header from './components/Header';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Employees from './containers/Employees';
import Dashboard from './containers/Dashboard';
const routes = (
    <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Employees} />
        <Redirect to="/" />
    </Switch>
);

function App() {
  return (
      <Header>
        {routes}
      </Header>
  );
}

export default withRouter(App);

