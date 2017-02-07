/**
 * Created by Wayuki on 08-Feb-17 0008.
 */
import { NOTIFICATION_ACTION_TYPES } from './actionTypes';

export const setNotification = (nocType, msg) => ({
    type: NOTIFICATION_ACTION_TYPES.SET_NOTIFICATION,
    nocType,
    msg,
});

export const resetNotification = () => ({
    type: NOTIFICATION_ACTION_TYPES.RESET_NOTIFICATION,
});

export default {};
