/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const topicReducer = (state = initialState.topics, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_TOPICS: {
            return action.topics;
        }
        default: {
            return state;
        }
    }
};

export default topicReducer;
