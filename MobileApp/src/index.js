/**
 * Created by Wayuki on 11-Feb-17
 */
import React from 'react';
import { StyleProvider } from 'native-base';

import theme from './theme';
import AppRouter from './AppRouter';

const AppContainer = () => (
    <StyleProvider style={theme}>
        <AppRouter />
    </StyleProvider>
);

export default AppContainer;
