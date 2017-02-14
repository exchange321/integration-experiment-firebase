/**
 * Created by Wayuki on 11-Feb-17.
 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TeacherPage from './components/teachers/TeacherPage';

const AppRouter = () => (
    <Router>
        <Scene key="root" component={App}>
            <Scene key="home" component={HomePage} title="Home" initial />
            <Scene key="about" component={AboutPage} title="About" />
            <Scene key="teacher" component={TeacherPage} title="Teachers" />
        </Scene>
    </Router>
);

export default AppRouter;
