/**
 * Created by Wayuki on 08-Feb-17 0008.
 */
import { NOTIFICATION_ACTION_TYPES } from '../actions/actionTypes';
import initialState from './initialState';

const notificationReducer = (state = initialState.notification, action) => {
    switch (action.type) {
        case NOTIFICATION_ACTION_TYPES.SET_NOTIFICATION: {
            return {
                ...state,
                hasNotification: true,
                type: action.nocType,
                msg: action.msg,
            };
        }
        case NOTIFICATION_ACTION_TYPES.RESET_NOTIFICATION: {
            return {
                ...state,
                hasNotification: false,
                type: '',
                msg: '',
            };
        }
        default: {
            return state;
        }
    }
};

export default notificationReducer;
