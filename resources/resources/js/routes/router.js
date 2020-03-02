import React from 'react';

import { Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/login/Login';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import Companies from '../components/Companies';

const Routes = props => (
    <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/companies' component={Companies}/>
        <PrivateRoute path='/' component={Home}/>
        {/*<Route component={NotFound}/>*/}
    </Switch>
);
export default Routes;
