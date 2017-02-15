/**
 * Created by Wayuki on 14-Feb-17.
 */
import firebaseApp from '../firebaseApp';
import { TEACHER_ACTION_TYPES } from './actionTypes';

const Teachers = firebaseApp.database().ref('teachers');

export const loadTeachers = () => (
    dispatch => (
        Teachers.on('value', (snapshot) => {
            const teachers = snapshot.val() || {};
            dispatch({
                type: TEACHER_ACTION_TYPES.LOAD_TEACHERS,
                teachers,
            });
        })
    )
);

export default {};
