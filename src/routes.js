import React from 'react';
import { Switch, Router, Route } from 'react-router';

import App from './App';
import NotFound from './components/NotFound/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default Routes;
