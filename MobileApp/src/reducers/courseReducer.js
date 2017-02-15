/**
 * Created by Wayuki on 15-Feb-17.
 */
import initialState from './initialState';
import { COURSE_ACTION_TYPES } from '../actions/actionTypes';

const courseReducer = (state = initialState.coursePage, action) => {
    switch (action.type) {
        case COURSE_ACTION_TYPES.LOAD_COURSES: {
            return {
                ...state,
                courses: action.courses,
            };
        }
        default: {
            return state;
        }
    }
};

export default courseReducer;
