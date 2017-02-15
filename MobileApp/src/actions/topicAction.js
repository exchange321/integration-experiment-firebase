/**
 * Created by Wayuki on 15-Feb-17.
 */
import firebaseApp from '../firebaseApp';
import { TOPIC_ACTION_TYPES } from './actionTypes';

const Topics = firebaseApp.database().ref('topics');

export const loadTopics = () => (
    dispatch => (
        Topics.on('value', (snapshot) => {
            const topics = snapshot.val() || {};
            dispatch({
                type: TOPIC_ACTION_TYPES.LOAD_TOPICS,
                topics,
            });
        })
    )
);

export const filterTopic = activeTopic => ({
    type: TOPIC_ACTION_TYPES.FILTER_TOPIC,
    activeTopic,
});

export default {};
