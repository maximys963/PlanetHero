import axios from 'axios';
import * as constants from '../actionTypes/teamsTypes';

export function addTeam(eventData) {
    return async dispatch => {
        try {
            const {
                name,
                imageURL,
            } = eventData;

            console.log('eventData', eventData);
            const token = localStorage.getItem('token');
            const resp = await axios.post('http://localhost:3000/teams',
                {
                    name,
                    imageURL
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

export function getTeams() {
    return async dispatch => {
        try {
            await dispatch({ type: constants.START_EVENT_FETCHING });
            const token = localStorage.getItem('token');
            const resp = await axios.get('http://localhost:3000/teams',
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
