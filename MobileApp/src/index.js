/**
 * Created by Wayuki on 11-Feb-17
 */
import React from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import theme from './theme';
import AppRouter from './AppRouter';

const store = configureStore();

const AppContainer = () => (
    <StyleProvider style={theme}>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </StyleProvider>
);

export default AppContainer;
