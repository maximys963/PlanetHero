import produce from 'immer';

import * as constants from '../actionTypes/eventTypes';

const initialState = {
    list : [],
    isEventsLoading: false
};

export const events = (state = initialState, actions) => {
    const { list } = actions;
    return produce(state, draftState => {
        switch (actions.type) {
        case constants.START_EVENT_FETCHING :
            draftState.isEventsLoading = true;
            draftState.list = list;
            break;
        case constants.EVENT_FETCHING_SUCCESS :
            draftState.isEventsLoading = false;
            draftState.list = list;
            break;
        case constants.EVENT_FETCHING_FAIL :
            draftState.isEventsLoading = false;
            draftState.isLogged  = false;
            break;
        }
    });
};
