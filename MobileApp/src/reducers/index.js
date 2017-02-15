/**
 * Created by Wayuki on 14-Feb-17.
 */
import { combineReducers } from 'redux';
import appPage from './appReducer';
import teacherPage from './teacherReducer';
import coursesPage from './topicReducer';
import coursePage from './courseReducer';

const rootReducer = combineReducers({
    appPage,
    teacherPage,
    coursesPage,
    coursePage,
});

export default rootReducer;
