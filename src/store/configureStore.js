/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const configureStore = initialState => (
    createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk),
    )
);

export default configureStore;
