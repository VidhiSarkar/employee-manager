import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Employees from './containers/Employees';

const routes = (
    <Switch>
        <Route path="/" exact component={Employees} />
        <Redirect to="/" />
    </Switch>
);

function App() {
  return (
      <div>
          <Header>
            {routes}
          </Header>
      </div>
  );
}

export default withRouter(App);

