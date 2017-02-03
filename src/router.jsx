import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './components/App.jsx';

import HomePage from './components/home/HomePage.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import TeachersPage from './components/teachers/TeachersPage.jsx';
import CoursesPage from './components/courses/CoursesPage.jsx';

import TopicAPI from './api/topics';

export default (
    <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="teachers" component={TeachersPage} />
        <Route path="courses(/:topic)" component={CoursesPage} topicAPI={TopicAPI} />
        <Redirect from="*" to="/" component={HomePage} />
    </Route>
);
