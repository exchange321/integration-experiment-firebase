/**
 * Created by Wayuki on 15-Feb-17.
 */
import initialState from './initialState';
import { TOPIC_ACTION_TYPES } from '../actions/actionTypes';

const topicReducer = (state = initialState.coursesPage, action) => {
    switch (action.type) {
        case TOPIC_ACTION_TYPES.LOAD_TOPICS: {
            return {
                ...state,
                topics: action.topics,
            }
        }
        case TOPIC_ACTION_TYPES.FILTER_TOPIC: {
            return {
                ...state,
                activeTopic: action.activeTopic,
            }
        }
        default: {
            return state;
        }
    }
};

export default topicReducer;
