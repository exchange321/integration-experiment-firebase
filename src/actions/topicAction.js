/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import actionTypes from './actionTypes';
import topicAPI from '../api/topics';

const loadTopicsSuccess = topics => (
    {
        type: actionTypes.GET_ALL_TOPICS,
        topics,
    }
);

export const loadTopics = () => (
    dispatch => (
        topicAPI.task(actionTypes.GET_ALL_TOPICS)
            .then((topics) => {
                dispatch(loadTopicsSuccess(topics));
            })
    )
);

export const saveTopic = topic => (
    () => (
        topicAPI.task(actionTypes.SAVE_TOPIC, { topic })
    )
);

export const deleteTopic = id => (
    () => (
        topicAPI.task(actionTypes.DELETE_TOPIC, { id })
    )
);

export default {};
