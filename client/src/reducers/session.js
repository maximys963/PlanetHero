import produce from 'immer';

import * as constants from '../actionTypes/sessionTypes';

const initialState = {
    isLoginLoading :false
};

export const session = (state = initialState, actions) => {
    return produce(state, draftState => {
        switch (actions.type) {
        case constants.START_LOGIN :
            draftState.isLoginLoading = true;
            break;
        case constants.LOGIN_SUCCESS :
            draftState.isLoginLoading = false;
            draftState.isLogged  = true;
            break;
        case constants.LOGIN_FAIL :
            draftState.isLoginLoading = false;
            draftState.isLogged  = false;
            break;
        }
    });
};
