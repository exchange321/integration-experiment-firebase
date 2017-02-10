/* Created by Wayuki on 07-Jan-17 0007. */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import AppRouter from './router.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './css/index.css';

window.$ = window.jQuery = require('jquery');
window.Tether = require('tether');
require('bootstrap');

const store = configureStore();

render(
    <Provider store={store}>
        <AppRouter store={store} />
    </Provider>,
    document.querySelector('#app'),
);
