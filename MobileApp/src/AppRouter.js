/**
 * Created by Wayuki on 11-Feb-17.
 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TeacherPage from './components/teachers/TeacherPage';
import CoursesPage from './components/courses/CoursesPage';

const AppRouter = () => (
    <Router>
        <Scene key="root" component={App}>
            <Scene key="home" component={HomePage} title="Home" initial />
            <Scene key="about" component={AboutPage} title="About" />
            <Scene key="teachers" component={TeacherPage} title="Teachers" />
            <Scene key="courses" component={CoursesPage} title="Courses" />
        </Scene>
    </Router>
);

export default AppRouter;
