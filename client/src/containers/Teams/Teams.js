import React, {
    useEffect,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import TeamIteam from './TeamItem/TeamItem';
import AddTeamsForm from './AddTeamForm/AddTeamForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';

import * as eventActions from '../../actions/events';

import styles from './Teams.module.css';


function Teams(){
    const [activeTeamPage, setActiveTeamPage] = useState('teams');
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.list);
    const isEventsLoading = useSelector(state => state.events.isEventsLoading);

    console.log('events', events);

    useEffect(() => {
        dispatch(eventActions.getEvents());
    }, []);

    return (
        <div className={styles.event_page}>
            {/*{*/}
            {/*    activeTeamPage === 'teams'*/}
            {/*        ? (*/}
            {/*            <div className={styles.event_container}>*/}
            {/*                <div className={styles.button_container}>*/}
            {/*                    <Button*/}
            {/*                        variant="outlined"*/}
            {/*                        onClick={() => setActiveTeamPage('eventForm')}*/}
            {/*                    >Add Event</Button>*/}
            {/*                </div>*/}
            {/*                <div className={styles.cardContainer}>*/}
            {/*                    {*/}
            {/*                        isEventsLoading*/}
            {/*                            ? <CircularProgress />*/}
            {/*                            : events.map((event) => (*/}
            {/*                                <TeamIteam*/}
            {/*                                    title      = {event.title}*/}
            {/*                                    description = {event.description}*/}
            {/*                                    imageURL   = {event.imageURL}*/}
            {/*                                />*/}
            {/*                            ))*/}
            {/*                    }*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*        : <AddTeamsForm setActiveTeamPage = {setActiveTeamPage} />*/}
            {/*}*/}
            <div style = {{ fontSize: '24px', fontFamily : 'Alata'  }}>Teams page in developing...</div>
        </div>
    );
}

export default Teams;
