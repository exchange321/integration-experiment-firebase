/**
 * Created by Wayuki on 14-Feb-17.
 */
import { combineReducers } from 'redux';
import appPage from './appReducer';
import teacherPage from './teacherReducer';

const rootReducer = combineReducers({
    appPage,
    teacherPage,
});

export default rootReducer;
