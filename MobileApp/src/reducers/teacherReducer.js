/**
 * Created by Wayuki on 14-Feb-17.
 */
import initialState from './initialState';
import { TEACHER_ACTION_TYPES } from '../actions/actionTypes';

const teacherReducer = (state = initialState.teacherPage, action) => {
    switch (action.type) {
        case TEACHER_ACTION_TYPES.LOAD_TEACHERS: {
            return {
                ...state,
                teachers: action.teachers,
            };
        }
        default: {
            return state;
        }
    }
};

export default teacherReducer;
