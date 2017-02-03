/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import { combineReducers } from 'redux';
import teachers from './teacherReducer';
import courses from './courseReducer';
import topics from './topicReducer';

const rootReducer = combineReducers({
    teachers,
    courses,
    topics,
});

export default rootReducer;
