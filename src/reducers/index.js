/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import teacherPage from './teacherReducer';
import appPage from './appReducer';
import courses from './courseReducer';
import coursesPage from './topicReducer';

const rootReducer = combineReducers({
    appPage,
    teacherPage,
    coursesPage,
    courses,
    firebase: firebaseStateReducer,
});

export default rootReducer;
