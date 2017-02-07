/**
 * Created by Wayuki on 03-Feb-17 0003.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import rootReducer from '../reducers';
import fbConfig from '../../firebaseConfig';

const configureStore = initialState => (
    createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk.withExtraArgument(getFirebase)),
            reactReduxFirebase(fbConfig, { userProfile: 'users', enableLogging: false }),
        ),
    )
);

export default configureStore;
