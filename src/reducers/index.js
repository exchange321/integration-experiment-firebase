/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import teacherPage from './teacherReducer';
import appPage from './appReducer';
import coursesPage from './topicReducer';
import coursePage from './courseReducer';

const rootReducer = combineReducers({
    appPage,
    teacherPage,
    coursesPage,
    coursePage,
    firebase: firebaseStateReducer,
});

export default rootReducer;
