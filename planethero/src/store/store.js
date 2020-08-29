import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
}                  from 'redux';
import thunk       from 'redux-thunk';
import { session } from '../reducers/session';
import { events }  from '../reducers/events';

const rootReducer = combineReducers({
    session,
    events
});

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
