/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import actionTypes from './actionTypes';
import teacherAPI from '../api/teachers';

const loadTeachersSuccess = teachers => (
    {
        type: actionTypes.GET_ALL_TEACHERS,
        teachers,
    }
);

export const loadTeachers = () => (
    dispatch => (
        teacherAPI.task(actionTypes.GET_ALL_TEACHERS)
            .then((teachers) => {
                dispatch(loadTeachersSuccess(teachers));
            })
    )
);

export const saveTeacher = teacher => (
    () => (
        teacherAPI.task(actionTypes.SAVE_TEACHER, { teacher })
    )
);

export const deleteTeacher = teacherId => (
    () => (
        teacherAPI.task(actionTypes.DELETE_TEACHER, { teacherId })
    )
);

export default {};
