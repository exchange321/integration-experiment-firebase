/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const teacherReducer = (state = initialState.courses, action) => {
    switch (action.type) {
        case actionTypes.GET_COURSES_BY_TOPIC_ID: {
            return action.courses;
        }
        case actionTypes.EMPTY_COURSES: {
            return [];
        }
        default: {
            return state;
        }
    }
};

export default teacherReducer;
