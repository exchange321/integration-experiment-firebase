/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import teacherPage from './teacherReducer';
import courses from './courseReducer';
import topics from './topicReducer';

const rootReducer = combineReducers({
    teacherPage,
    courses,
    topics,
    firebase: firebaseStateReducer,
});

export default rootReducer;
