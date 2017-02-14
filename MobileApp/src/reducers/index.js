/**
 * Created by Wayuki on 14-Feb-17.
 */
import { combineReducers } from 'redux';
import teacherPage from './teacherReducer';

const rootReducer = combineReducers({
    teacherPage,
});

export default rootReducer;
