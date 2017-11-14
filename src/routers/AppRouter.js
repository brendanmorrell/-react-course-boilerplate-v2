import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LoginPage from '../components/LoginPage';
import DashboardPage from './../components/DashboardPage';
import NotFoundPage from './../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  // reactrouterdom syntax is a little strange so we immediately define a jsx tree to define the router configuration based off the current url
  <Router history={history}>
    <div>{/* browser router only handles one child route, so you need to wrap/hide them in a div. */}
      {/* placing an element prior to switch will make it display on every page */}
      <Switch>{/* Switch is like a div in terms of browserrouter taking a single chile. It is a componenet that goes through each componenet to see if there is a url that matches it. switch looks through the list of routes, and stops when it finds the correct one. Thus, if it never finds one, it eventually ends up at the error page we have set up with no path which thus matches everything, and it will match with this rendering our error page */}
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />{/* set the path for the url you want to use for each route and tell what component you want to render for that url. you need to set exact to true, otherwise everything that matches any part of the url will load, so when you load /create it will also load / since that is contained within /create */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
export default AppRouter;
