/* Created by Wayuki on 07-Jan-17 0007. */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadTeachers } from './actions/teacherAction';

import routes from './router.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './css/index.css';

window.$ = window.jQuery = require('jquery');
window.Tether = require('tether');
require('bootstrap');

const store = configureStore();
store.dispatch(loadTeachers());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.querySelector('#app'),
);
