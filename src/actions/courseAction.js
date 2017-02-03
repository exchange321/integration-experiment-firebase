/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import actionTypes from './actionTypes';
import topicAPI from '../api/topics';

const loadCoursesSuccess = courses => (
    {
        type: actionTypes.GET_COURSES_BY_TOPIC_ID,
        courses,
    }
);

export const loadCourses = topicId => (
    dispatch => (
        topicAPI.task(actionTypes.GET_COURSES_BY_TOPIC_ID, { topicId })
            .then((courses) => {
                dispatch(loadCoursesSuccess(courses));
            })
    )
);

export default {};
