import React, {
    useEffect,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import EventItem         from './EventItem/EventItem';
import AddEventForm      from './AddEventForm/AddEventForm';
import CircularProgress  from '@material-ui/core/CircularProgress';
import { Button }        from '@material-ui/core';
import styles            from './Events.module.css';
import * as eventActions from '../../actions/events';



function Events(){
    const [activeEventPage, setActiveEventPage] = useState('event');
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.list);
    const isEventsLoading = useSelector(state => state.events.isEventsLoading);

    console.log('events', events);

    useEffect(() => {
        dispatch(eventActions.getEvents());
    }, []);

    return (
        <div className={styles.event_page}>
            {
                activeEventPage === 'event'
                    ? (
                        <div className={styles.event_container}>
                            <div className={styles.button_container}>
                                <Button
                                    variant="outlined"
                                    onClick={() => setActiveEventPage('eventForm')}
                                >Add Event</Button>
                            </div>
                            <div className={styles.cardContainer}>
                                {
                                    isEventsLoading
                                        ? <CircularProgress />
                                        : events.map((event) => (
                                            <EventItem
                                                title      = {event.title}
                                                description = {event.description}
                                                imageURL   = {event.imageURL}
                                            />
                                        ))
                                }
                            </div>
                        </div>
                    )
                    : <AddEventForm setActiveEventPage = {setActiveEventPage} />
            }
        </div>
    );
}

export default Events;
