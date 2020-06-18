import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Header from '../components/Header';
import TaskBar from '../components/TaskBar';

const AppRouter = ()=> (
    <BrowserRouter>
        <div>
            <Route component={ Header }></Route>
            <Switch>
                <Route path='/' component={TaskBar} exact={true}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
