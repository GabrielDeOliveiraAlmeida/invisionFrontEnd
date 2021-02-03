import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Login } from '../../presentations/pages/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;