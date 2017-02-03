/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import { combineReducers } from 'redux';
import teachers from './teacherReducer';

const rootReducer = combineReducers({
    teachers,
});

export default rootReducer;
