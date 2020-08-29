import React        from 'react';
import {
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';
import { MainMenu } from './MainMenu/MainMenu';
import plantImage   from '../../assets/images/pollution.jpg';

import styles from './PlanetHero.module.css';
import Events from '../Events/Events';
import Profile from '../Profile/Profile';
import Teams from '../Teams/Teams';

import { checkToken } from '../../helpers/checkToken';

export function PlanetHero() {
    const isTokenExists = checkToken();

    return(
        <div className={styles.plh_container}>
            <MainMenu />
            <Switch>
                <Route path='/planetHero/events' render={() => (
                    isTokenExists
                        ? <Events />
                        : <Redirect to='/login' />
                )} />
                <Route path='/planetHero/profile' render={() => (
                    isTokenExists
                        ? <Profile />
                        : <Redirect to='/login' />
                )} />
                <Route path='/planetHero/teams' render={() => (
                    isTokenExists
                        ? <Teams />
                        : <Redirect to='/login' />
                )} />
            </Switch>


            {/*<div className={styles.plh_image_container}>*/}
            {/*<img*/}
            {/*    className={styles.plh_image}*/}
            {/*    src={plantImage}*/}
            {/*/>*/}
            {/*<div className={styles.motto_container}>*/}
            {/*    Be a hero for your planet.*/}
            {/*</div>*/}
            {/*</div>*/}
        </div>
    );
}
