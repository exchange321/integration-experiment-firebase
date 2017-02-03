/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import { combineReducers } from 'redux';
import teachers from './teacherReducer';
import courses from './courseReducer';

const rootReducer = combineReducers({
    teachers,
    courses,
});

export default rootReducer;
