/**
 * Created by Wayuki on 14-Feb-17.
 */
import { APP_ACTION_TYPES } from './actionTypes';

export const triggerDrawer = openDrawer => ({
    type: APP_ACTION_TYPES.TRIGGER_DRAWER,
    openDrawer,
});

export default {};
