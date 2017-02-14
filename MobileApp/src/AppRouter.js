/**
 * Created by Wayuki on 11-Feb-17.
 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

const AppRouter = () => (
    <Router>
        <Scene key="root" component={App} open={false}>
            <Scene key="home" component={HomePage} title="Home" />
            <Scene key="about" component={AboutPage} title="About" />
        </Scene>
    </Router>
);

export default AppRouter;
