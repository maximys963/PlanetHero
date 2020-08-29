import axios from 'axios';

import * as constants from '../actionTypes/sessionTypes';

export function login(loginForm, history) {
    const { username, password} = loginForm;
    return async dispatch => {
        try{
            dispatch({ type : constants.START_LOGIN });
            const resp = await axios.post('http://localhost:3000/users/login',{ username, password});
            localStorage.setItem('token', resp.data.token);
            dispatch({
                type : constants.LOGIN_SUCCESS,
            });
            console.log('resp', resp);
            console.log('history', history);
        } catch (err) {
            console.error('error', err);
            dispatch({
                type : constants.LOGIN_FAIL,
            });
        }
    };
}

export function signUp(signUpForm) {
    const { username, password } = signUpForm;
    return async dispatch => {
        try{
            dispatch({ type : constants.START_LOGIN });
            const resp = await axios.post('http://localhost:3000/users/signup',{ username, password});
            localStorage.setItem('token', resp.data.token);
            dispatch({ type : constants.LOGIN_SUCCESS });
            console.log('resp', resp);
        } catch (err) {
            console.error('error', err);
            dispatch({ type : constants.LOGIN_FAIL });
        }
    };
}

// export  async function checkSession() {
//     const token = localStorage.getItem('token');
//
//     const resp = await axios.post('http://localhost:3000/users/checkJWToken',
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `bearer ${token}`
//             },
//         });
//     console.log('resp', resp);
// }
