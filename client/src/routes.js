import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import NotFound from './components/NotFound/NotFound';

const Routes = (props) => (
    <BrowserRouter {...props}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
