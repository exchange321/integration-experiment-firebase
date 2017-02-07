import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './components/App.jsx';

import HomePage from './components/home/HomePage.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import TeachersPage from './components/teachers/TeachersPage.jsx';
import CoursesPage from './components/courses/CoursesPage.jsx';
import CoursePage from './components/courses/course/CoursePage.jsx';

export default (
    <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="teachers" component={TeachersPage} />
        <Route path="courses" component={CoursesPage}>
            <Route path=":topic" component={CoursePage} />
        </Route>
        <Redirect from="*" to="/" component={HomePage} />
    </Route>
);
