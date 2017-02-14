/**
 * Created by Wayuki on 14-Feb-17.
 */
import { APP_ACTION_TYPES } from '../actions/actionTypes';
import initialState from './initialState';

const appReducer = (state = initialState.appPage, action) => {
    switch (action.type) {
        case APP_ACTION_TYPES.TRIGGER_DRAWER: {
            return {
                ...state,
                drawerOpen: action.openDrawer,
            };
        }
        default: {
            return state;
        }
    }
};

export default appReducer;
