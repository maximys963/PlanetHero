import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginScreen } from '../LoginScreen/LoginScreen';
import { PlanetHero }  from '../PlanetHero/PlanetHero';
import Events          from '../Events/Events';
import Profile         from '../Profile/Profile';
import Teams           from '../Teams/Teams';

import { checkToken }  from '../../helpers/checkToken';

export function Navigation() {
    const isLogged = useSelector(state => state.session.isLogged);
    const isTokenExists = checkToken();
    console.log('isTokenExists', isTokenExists);

    return(
        <Switch>
            <Route
                path='/login'
                render={() => (
                    !isLogged
                        ? <LoginScreen />
                        : <Redirect to='/planetHero/events' />
                )}
            />
            <Route path='/planetHero' render={() => (
                isLogged || isTokenExists
                    ? <PlanetHero />
                    : <Redirect to='/login' />
            )} />
            <Route exact path='/planetHero/events' render={() => (
                isLogged || isTokenExists
                    ? <Events />
                    : <Redirect to='/login' />
            )}/>
            <Route exact path='/planetHero/profile' render={() => (
                isLogged || isTokenExists
                    ? <Profile />
                    : <Redirect to='/login' />
            )} />
            <Route exact path='/planetHero/teams' render={() => (
                isLogged || isTokenExists
                    ? <Teams />
                    : <Redirect to='/login' />
            )} />
            <Redirect to='/planetHero/events' />
        </Switch>
    );}
