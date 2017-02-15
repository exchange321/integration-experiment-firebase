/**
 * Created by Wayuki on 15-Feb-17.
 */
import firebaseApp from '../firebaseApp';
import { COURSE_ACTION_TYPES } from './actionTypes';

const Courses = firebaseApp.database().ref('courses');

const loadCoursesWithTopic = topic => (
    dispatch => (
        Courses.orderByChild('topic').equalTo(topic).on('value', (snapshot) => {
            const courses = snapshot.val() || {};
            dispatch({
                type: COURSE_ACTION_TYPES.LOAD_COURSES,
                courses,
            });
        })
    )
);

const loadCoursesWithoutTopic = () => (
    dispatch => (
        Courses.on('value', (snapshot) => {
            const courses = snapshot.val() || {};
            dispatch({
                type: COURSE_ACTION_TYPES.LOAD_COURSES,
                courses,
            });
        })
    )
);

export const loadCourses = (topic = '') => (
    dispatch => {
        dispatch(topic ? loadCoursesWithTopic(topic) : loadCoursesWithoutTopic());
    }
);

export default {};
