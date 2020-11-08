import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { LoginScreen } from '../LoginScreen/LoginScreen';
import { PlanetHero }  from '../PlanetHero/PlanetHero';
import Events          from '../Events/Events';
import Profile         from '../Profile/Profile';
import Teams           from '../Teams/Teams';

// import { checkToken }  from '../../helpers/checkToken';

export function Navigation() {
    // const isLogged = useSelector(state => state.session.isLogged);
    // const isTokenExists = checkToken();
    // console.log('isTokenExists', isTokenExists);

    //TODO REFACTOR THIS PART AND CREATE PROTECTED ROUTES

    return(
        <Switch>
            <Route
                path='/login'
                component = {LoginScreen}
            />
            <Route
                path      = '/planetHero'
                component = {PlanetHero}
            />
            <Route
                exact
                path      = '/planetHero/events'
                component = {Events}
            />
            <Route
                exact
                path      = '/planetHero/profile'
                component = {Profile}
            />
            <Route
                exact
                path      = '/planetHero/teams'
                component = {Teams}
            />
            <Redirect to='/planetHero/events' />
        </Switch>
    );}
