/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const teacherReducer = (state = initialState.teachers, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_TEACHERS: {
            return action.teachers;
        }
        default: {
            return state;
        }
    }
};

export default teacherReducer;
