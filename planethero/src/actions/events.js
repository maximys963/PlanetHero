import axios from 'axios';
import * as constants from '../actionTypes/eventTypes';

export function addEvent(eventData) {
    return async dispatch => {
        try {
            const {
                title,
                url,
                data
            } = eventData;

            console.log('eventData', eventData);
            const token = localStorage.getItem('token');
            const resp = await axios.post('http://localhost:3000/events',
                {
                    title,
                    imageURL: url,
                    data
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${token}`,
                    },
                }
            );
            console.log('event was created', resp);
        } catch (err) {
            console.log('error', err);
        }
    };
}

export function getEvents() {
    return async dispatch => {
        try {
            await dispatch({ type: constants.START_EVENT_FETCHING });
            const token = localStorage.getItem('token');
            const resp = await axios.get('http://localhost:3000/events',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${token}`,
                    },
                });
            await dispatch({
                type: constants.EVENT_FETCHING_SUCCESS,
                list: resp.data
            });
        } catch (err) {
            console.log('error', err);
            await dispatch({ type: constants.EVENT_FETCHING_FAIL });
        }
    };
}

/*

//
//     const resp = await axios.post('http://localhost:3000/users/checkJWToken',
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `bearer ${token}`
//             },
//         });

 */
