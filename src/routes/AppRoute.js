import React from 'react';
import {Grid} from 'semantic-ui-react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
//components
import Header from '../components/dashBoard/header/index';
import Menu from '../components/dashBoard/menu/index';
import Home from '../components/dashBoard/content/home';
import SignIn from '../components/signPage/index';
const AppRouter = () => (
    <BrowserRouter>
        <Grid>
        <PublicRoute component={Menu} path="/" exact />  
        <PublicRoute component={Header} path="/" exact />  
        <PublicRoute component={SignIn} path="/login" exact />  
        {/* //only here will change the route no page content (single page) */}
        <PublicRoute component={Home} path="/" exact />
        </Grid>     
    </BrowserRouter>
);

export default AppRouter;